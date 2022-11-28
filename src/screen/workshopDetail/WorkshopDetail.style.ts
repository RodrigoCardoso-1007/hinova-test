import { StyleSheet } from "react-native";
import { colors, dimensions, fonts } from "../../style/Style";

export default StyleSheet.create({
    container: {
        flex: 1, 
        width: "100%", 
        backgroundColor: colors.tertiary,
        paddingHorizontal: dimensions.lg,
    },
    imageStyle: {
        height: 130, 
        marginVertical: dimensions.lg
    },
    itemContainer: {
        flex: 1,
        margin: dimensions.sm,
        borderRadius: dimensions.sm,
        justifyContent: 'center',        
    },
    labelStyle: {
        color: colors.primary,
        marginBottom: dimensions.xs,
        fontFamily: fonts.medium
    },
    itemText: {
        color: colors.primary,
        fontsize: dimensions.lg,
        backgroundColor: colors.quaternary,
        paddingVertical: dimensions.sm,
        paddingHorizontal: dimensions.sm,
        borderRadius: 6,
        fontFamily: fonts.regular
    },
    buttonContainer: {
        marginBottom: dimensions.lg, 
        padding: dimensions.sm,
        height: 60        
    }
})