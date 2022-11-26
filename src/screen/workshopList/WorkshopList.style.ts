import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listStyle: {
        paddingHorizontal: 16,
        marginTop: 16
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