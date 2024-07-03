import { StyleSheet, Platform } from "react-native";
import colors from "../utils/colors";

export default styles = StyleSheet.create(
    {
        safeArea: {
            height: Platform.OS === "android" ? 260 : 230,
            alignItems: "center",
            paddingTop: Platform.OS === "android" ? 30 : 0
        },
        background: {
            position: "absolute",
            zIndex: -1,
            backgroundColor: colors.PRIMARY_COLOR,
            height: Platform.OS === "android" ? 200 : 140,
            width: "100%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
        },
        titleApp: {
            marginTop: Platform.OS === "android" ? 25 : 10,
            fontSize: 25,
            fontWeight: "bold",
            color: "#fff"
        },
    }
);