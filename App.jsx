import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, Platform } from "react-native";
import colors from "./src/utils/colors";
import { Form } from "./src/components/Form";
import appStyles from "./src/styles/appStylesheet";
import { useEffect, useState } from "react";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";

export default function App() {

    const device = Platform.OS === "android" ? `OS: ${Platform.OS}. Model: ${Platform.constants.Brand} ${Platform.constants.Model}` : `OS: ${Platform.OS}. Version: ${Platform.constants.osVersion}`;

    const [inputs, setInputs] = useState({
        amount: null,
        interest: null,
        months: null
    });
    const [total, setTotal] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    console.log(device)

    const reset = () => {
        setErrorMessage("");
        setTotal(null);
    };

    const calculate = () => {
        reset();
        if (!inputs.amount) {
            setErrorMessage("Enter the loan amount to request");
        } else if (!inputs.interest) {
            setErrorMessage("Enter the interest rate");
        } else if (!inputs.months) {
            setErrorMessage("Select the months");
        } else {
            const interest = inputs.interest / 100;
            const fee = inputs.amount / ((1 - Math.pow(interest + 1, -inputs.months)) / interest);
            setTotal({
                monthlyFee: fee.toFixed(2).replace(".", ","),
                totalPay: (fee * inputs.months).toFixed(2).replace(".", ",")
            });
        }
    };

    useEffect(() => {
        (inputs.amount && inputs.interest && inputs.months) ? calculate() : reset();
    }, [inputs]);


    return (
        <>
            <SafeAreaView style={appStyles.safeArea}>
                <View style={appStyles.background} />
                <Text style={appStyles.titleApp}>Loan Calculator</Text>
                <Form setInputs={setInputs} />
            </SafeAreaView>

            <Result errorMessage={errorMessage} total={total} inputs={inputs} />

            <Footer calculate={calculate} />

            <StatusBar style="light" backgroundColor={colors.PRIMARY_COLOR} />
        </>
    );
};
