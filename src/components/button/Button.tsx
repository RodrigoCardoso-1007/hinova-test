import { TouchableOpacity, Text } from 'react-native';

import { Loading } from '../index';
import { IButtonProps } from "./Button.interface";
import { colors } from '../../style/Style';
import Style from './Button.style';

export default function Button(props: IButtonProps) {
    const { text, loading, style, onPress } = props;

    return (
        <TouchableOpacity style={[Style.containerStyle, style?.container]} onPress={onPress} >
            {loading ?
                <Loading color={style?.loadingColor || colors.tertiary}/>
                :
                <Text style={[Style.textStyle, style?.textStyle]} numberOfLines={1}>{text}</Text>
            }
        </TouchableOpacity>
    )
}