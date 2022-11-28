import { View, Text } from 'react-native';

import ITextLineProps from "./TextLine.interface";
import Style from './TextLine.style';

export default function TextLine(props: ITextLineProps) {
    const { text, style } = props;

    return (
        <View style={[Style.containerStyle, style?.containerStyle]}>
            <Text style={[Style.textStyle, style?.textStyle]}>{text}</Text>

            <View style={[Style.lineStyle, style?.lineStyle]}></View>
        </View>
    )

}