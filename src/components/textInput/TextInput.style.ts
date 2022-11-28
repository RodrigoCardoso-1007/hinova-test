import { StyleSheet } from "react-native";
import { colors, dimensions, fonts } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
    },
    labelStyle: {
        marginBottom: dimensions.xs,
        fontFamily: fonts.medium,
        color: colors.primary,
    },    
    inputStyle: {
        height: 40,
        padding: dimensions.md,
        color: colors.primary,
        backgroundColor: colors.quaternary,
        borderRadius: dimensions.sm
    }
})