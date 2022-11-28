import { StyleSheet } from "react-native";
import { colors, dimensions } from "./../../style/Style";

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colors.tertiary,
        paddingHorizontal: dimensions.lg,
    },
    formStyle: {
        backgroundColor: colors.tertiary,
        marginBottom: dimensions.md,
    },
    textLineStyle: {
        marginTop: dimensions.md
    },
    buttonContainer: {
        marginBottom: dimensions.md, 
        padding: dimensions.sm,
        height: 60        
    },
})