import { Text, View } from "react-native";
import React from "react";
import resultStyles from "../styles/resultStylesheet";

export default Result = ({ errorMessage, total, inputs }) => {
    return (
        <View style={resultStyles.content}>
            {total && (
                <View style={resultStyles.resultBox}>
                    <Text style={resultStyles.title}>SUMMARY</Text>
                    <DataResult title="Requested amount:" value={`${inputs.amount} $`} />
                    <DataResult title="Interest rate:" value={`${inputs.interest} %`} />
                    <DataResult title="Payment term:" value={`${inputs.months} Months`} />
                    <DataResult title="Monthly fee:" value={`${total.monthlyFee} $`} />
                    <DataResult title="Total payment:" value={`${total.totalPay} $`} />
                </View>
            )}
            <View>
                <Text style={resultStyles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
};

const DataResult = ({ title, value }) => {
    return (
        <View style={resultStyles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
};