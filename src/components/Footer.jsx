import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import footerStyles from "../styles/footerStylesheet";

export default Footer = ({ calculate }) => {
    return (
        <View style={footerStyles.viewFooter}>
            <TouchableOpacity style={footerStyles.button} onPress={calculate}>
                <Text style={footerStyles.text}>Calculate</Text>
            </TouchableOpacity>
        </View>
    );
};