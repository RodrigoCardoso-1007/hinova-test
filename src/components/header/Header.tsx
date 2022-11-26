import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import IHeaderProps from './Header.interface';
import Style from './Header.style'

export default function Header(props: IHeaderProps) {

    const { hideBackButton, headerText, onPressBack } = props;

    const navigation = useNavigation<any>();

    function onPress() {
        if (onPressBack) onPressBack();
        return navigation.goBack();
    }

    const textStyle = !hideBackButton && {marginLeft: -56};

    return (
        <View style={[Style.container]}>
            {!hideBackButton &&
                <MaterialIcons style={{ flex: 0.2, zIndex: 1000 }} name={"chevron-left"} color='blue' size={40} onPress={onPress} />
            }

            <Text style={[Style.textStyle, textStyle]}>{headerText}</Text>
        </View>
    )

}