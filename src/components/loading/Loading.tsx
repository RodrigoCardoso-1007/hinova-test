
import { View, ActivityIndicator } from 'react-native';

import { colors } from "./../../style/Style";

import ILoadingProps from "./Loading.interface";
import Style from "./Loading.style";


export default function Loading(props: ILoadingProps) {
    const { color, size, styleProps } = props;

    return (
        <View style={[Style.container, styleProps?.container]}>
            <ActivityIndicator style={[styleProps?.iconStyle]} color={color || colors.pallet.primary} size={size} />
        </View>
    )
}