import { TextInput as TextInputComponent, View, Text } from "react-native";
import ITextInputProps from "./TextInput.interface";

import { colors } from "../../style/Style";
import Style from './TextInput.style';

export default function TextInput(props: ITextInputProps) {

    const { label, value, keyboardType, placeholder, multiLines, style, onChange } = props;

    const inputStyle = multiLines && { height: 80 };
    const numberOfLines = multiLines ? 3 : 1;

    return (
        <View style={[Style.containerStyle, style?.containerStyle]}>
            {label &&
                <Text style={[Style.labelStyle, style?.labelStyle]}>{label}</Text>
            }

            <TextInputComponent
                style={[Style.inputStyle, inputStyle, style?.inputStyle]}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                multiline={multiLines}
                numberOfLines={numberOfLines}
                placeholderTextColor={colors.tertiary}
            />
        </View>
    )
}