import { StyleSheet } from "react-native";
import { colors } from "./../../style/Style";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'blue',
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    titleStyle: {
        color: colors.textColor.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textStyle: {
        color: colors.textColor.secondary,
        opacity: 0.8,
        fontSize: 12,
        marginTop: 4
    },
    iconStyle: {
        fontSize: 30,
        color: colors.textColor.primary,
    }

})