import { StyleSheet } from "react-native";
import { colors, dimensions, fontSize, fonts } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        marginTop: dimensions.sm,
        flexDirection: 'row',
        borderRadius: dimensions.lg,
        paddingHorizontal: dimensions.md,
        paddingVertical: dimensions.lg,
        backgroundColor: colors.tertiary,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: dimensions.md,
        borderColor: colors.primary,
    },
    textContainerStyle: {
        flex: 1,
        marginLeft: dimensions.lg,
    },
    titleStyle: {
        color: colors.primary,
        fontSize: fontSize.sm,
        fontFamily: fonts.medium
    },
    textStyle: {
        marginTop: dimensions.sm,
        lineHeight: dimensions.lg,
        color: colors.secondary,
        opacity: 0.8,
        fontSize: fontSize.xs,
        fontFamily: fonts.semiBold,
    },
    iconStyle: {
        fontSize: 30,
        color: colors.primary,
        alignSelf: 'center'
    }

})