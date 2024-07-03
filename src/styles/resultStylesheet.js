import { StyleSheet, Platform } from "react-native";
import colors from "../utils/colors";

export default resultStyles = StyleSheet.create(
    {
        error: {
            textAlign: "center",
            color: colors.ERROR_COLOR,
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 40
        },
        content: {
            marginTop: 0,
            marginHorizontal: 40,
        },
        resultBox: {
            padding: Platform.OS === "android" ? 30 : 0
        },
        title: {
            marginBottom: Platform.OS === "android" ? 30 : 20,
            fontSize: Platform.OS === "android" ? 30 : 25,
            textAlign: "center",
            fontWeight: "bold",
        },
        value: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20
        },
    }
);