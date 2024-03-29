import { StyleSheet } from "react-native";
import { colors, dimensions, fonts, fontSize } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        height: 70,
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        paddingHorizontal: dimensions.lg,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:  colors.primary
    },
    textStyle: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: fontSize.lg,
        flex: 1,
        textTransform: "uppercase",
        fontFamily: fonts.bold,
        marginRight: dimensions.lg
    },
    iconStyle: {
        alignItems: 'flex-start'
    }
})