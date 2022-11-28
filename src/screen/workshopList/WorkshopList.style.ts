import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colors.tertiary
    },
    listStyle: {
        paddingHorizontal: dimensions.lg,
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListText: {
        color: 'blue',
        fontSize: 24
    }
})