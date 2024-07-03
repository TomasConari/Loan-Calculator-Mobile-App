import { StyleSheet, Platform } from "react-native";
import colors from "../utils/colors";

export default formStyles = StyleSheet.create(
    {
        viewForm: {
            position: "absolute",
            bottom: Platform.OS === "android" ? 0 : 35,
            width: "85%",
            paddingHorizontal: 50,
            backgroundColor: colors.PRIMARY_COLOR_DARK,
            borderRadius: 30,
            height: Platform.OS === "android" ? 150 : 130,
            justifyContent: "center"
        },
        viewInputs: {
            flexDirection: "row",
        },
        input: {
            height: Platform.OS === "android" ? 50 : 45,
            backgroundColor: colors.BACKGROUND_COLOR,
            borderWidth: 1,
            borderColor: colors.PRIMARY_COLOR,
            borderRadius: 5,
            width: "60%",
            marginRight: 5,
            marginLeft: -10,
            marginBottom: 10,
            color: "#000",
            paddingHorizontal: 10,
        },
        inputPercentage: {
            width: "45%",
            marginLeft: 5
        },
        pickerSelecter: {
            inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 4,
                color: "black",
                paddingRight: 30,
                backgroundColor: colors.BACKGROUND_COLOR,
                marginLeft: -5,
                marginRight: -5
            },
            inputAndroid: {
                backgroundColor: colors.BACKGROUND_COLOR,
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 8,
                color: "black",
                paddingRight: 30,
            }
        }
    }
);