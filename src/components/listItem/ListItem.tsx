import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Mask } from './../../module';
import IListItemProps from "./Listitem.interface";

import Style from './ListItem.style';

export default function ListItem(props: IListItemProps) {

    const {
        title, description,
        image, styleProps,
        numberOfLinesTitle,
        numberOfLinesDescription,
        hideIcon, customIcon,
        onPressItem
    } = props;

    function onPress() {
        if (!onPressItem) return;

        return onPressItem();
    }

    return (
        <TouchableOpacity
            style={[Style.container, styleProps?.container]}
            onPress={onPress}
        >
            {image &&
                <Image
                    style={[Style.imageStyle, styleProps?.imageStyle]}
                    source={{ uri: Mask.formatBase64(image) }}
                />
            }

            <View style={[Style.textContainer, styleProps?.textContainer]}>
                <Text style={[Style.titleStyle, styleProps?.titleStyle]} numberOfLines={numberOfLinesTitle}>{title}</Text>

                {description &&
                    <Text style={[Style.textStyle, styleProps?.textStyle]} numberOfLines={numberOfLinesDescription}>{description}</Text>
                }
            </View>

            {!hideIcon &&
                <MaterialIcons style={[Style.iconStyle, styleProps?.iconStyle]} name={customIcon || "chevron-right"} />
            }
        </TouchableOpacity>
    );
}