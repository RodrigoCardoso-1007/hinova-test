import { KeyboardTypeOptions } from 'react-native';

export default interface ITextInputProps {
    value: string,
    label?: string
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    multiLines?: boolean;
    style?: any,
    onChange: (value: string) => void
}