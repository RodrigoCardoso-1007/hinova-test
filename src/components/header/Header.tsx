import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { colors } from "./../../style/Style";

import IHeaderProps from './Header.interface';
import Style from './Header.style'

export default function Header(props: IHeaderProps) {

    const { hideBackButton, headerText, onPressBack } = props;

    const navigation = useNavigation<any>();

    function onPress() {
        if (onPressBack) return onPressBack();
        return navigation.goBack();
    }

    return (
        <View style={[Style.containerStyle]}>
            {!hideBackButton &&
                <View style={[Style.iconStyle]}>
                    <MaterialIcons
                        name={"chevron-left"}
                        color={colors.primary}
                        size={40}
                        onPress={onPress}
                    />
                </View>
            }

            <Text numberOfLines={1} style={[Style.textStyle]}>{headerText}</Text>
        </View>
    )

}