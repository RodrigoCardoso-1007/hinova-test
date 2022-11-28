import { StyleSheet } from "react-native";
import { colors, dimensions, fonts, fontSize } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dimensions.md
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: fontSize.lg,
        textTransform: "uppercase",
        fontFamily: fonts.bold,
        letterSpacing: 1.3,
    }
})