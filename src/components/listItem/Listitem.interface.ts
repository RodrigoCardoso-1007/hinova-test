export default interface IListItemProps {
    title: string,
    image?: string,
    description?: string,
    style?: any,
    hideIcon?: boolean,
    customIcon?: string,
    numberOfLinesTitle?: number,
    numberOfLinesDescription?: number,
    onPressItem?: () => void,
}