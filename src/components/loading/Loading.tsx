
import { View, ActivityIndicator } from 'react-native';

import ILoadingProps from "./Loading.interface";
import { colors } from "./../../style/Style";
import Style from "./Loading.style";

export default function Loading(props: ILoadingProps) {
    const { color, size, style } = props;

    return (
        <View style={[Style.containerStyle, style?.containerStyle]}>
            <ActivityIndicator style={[style?.iconStyle]} color={color || colors.primary} size={size} />
        </View>
    )
}