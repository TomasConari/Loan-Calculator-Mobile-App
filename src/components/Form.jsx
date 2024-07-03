import React from "react";
import { TextInput, View } from "react-native";
import formStyles from "../styles/formStylesheet";
import RNPickerSelect from "react-native-picker-select";

export const Form = ({ setInputs }) => {

    const updateInputs = (value, input) => {
        setInputs((prevState) => ({
            ...prevState,
            [input]: value,
        }));
    };

    return (
        <View style={formStyles.viewForm}>
            <View style={formStyles.viewInputs}>
                <TextInput
                    onChangeText={(value) => updateInputs(value, "amount")}
                    placeholder="Amount $"
                    keyboardType="numeric"
                    style={formStyles.input}
                />
                <TextInput
                    onChangeText={(value) => updateInputs(value, "interest")}
                    placeholder="Interest %"
                    keyboardType="numeric"
                    style={[formStyles.input, formStyles.inputPercentage]}
                />
            </View>
            <RNPickerSelect
                style={formStyles.pickerSelecter}
                onValueChange={(value) => updateInputs(value, "months")}
                placeholder={{ label: "Select payment term", value: null }}
                items={[
                    { label: "3 Months", value: 3 },
                    { label: "6 Months", value: 6 },
                    { label: "12 Months", value: 12 },
                    { label: "24 Months", value: 24 }
                ]}
            />
        </View>
    );
};