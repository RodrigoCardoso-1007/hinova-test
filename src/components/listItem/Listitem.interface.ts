export default interface IListItemStyle {
    container?: Object,
    imageStyle?: Object,
    textContainer?: Object,
    titleStyle?: Object,
    textStyle?: Object,
    iconStyle?: Object,
}

export default interface IListItemProps {
    title: string,
    image?: string,
    description?: string,
    styleProps?: IListItemStyle,
    hideIcon?: boolean,
    customIcon?: string,
    numberOfLinesTitle?: number,
    numberOfLinesDescription?: number,
    onPressItem?: () => void,
}