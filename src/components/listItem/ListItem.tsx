import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Mask } from './../../module';
import IListItemProps from "./Listitem.interface";

import Style from './ListItem.style';

export default function ListItem(props: IListItemProps) {

    const {
        title, description,
        image, style,
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
            style={[Style.containerStyle, style?.containerStyle]}
            onPress={onPress}
        >
            {image &&
                <Image
                    style={[Style.imageStyle, style?.imageStyle]}
                    source={{ uri: Mask.formatBase64(image) }}
                />
            }

            <View style={[Style.textContainerStyle, style?.textContainerStyle]}>
                <Text style={[Style.titleStyle, style?.titleStyle]} numberOfLines={numberOfLinesTitle}>{title}</Text>

                {description &&
                    <Text style={[Style.textStyle, style?.textStyle]} numberOfLines={numberOfLinesDescription}>{description}</Text>
                }
            </View>

            {!hideIcon &&
                <MaterialIcons style={[Style.iconStyle, style?.iconStyle]} name={customIcon || "chevron-right"} />
            }
        </TouchableOpacity>
    );
}