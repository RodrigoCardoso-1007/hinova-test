import { StyleSheet } from "react-native";
import { colors, dimensions, fonts, fontSize } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        flexDirection: "row",    
    },
    textStyle: {
        fontSize: fontSize.md,
        color: colors.primary,
        fontFamily: fonts.bold
    },
    lineStyle: {
        alignSelf: 'center',
        flex: 1,
        height: 1,
        marginLeft: dimensions.xs,
        backgroundColor: colors.primary
    }
})