import { Alert as AlertComponent, AlertButton, AlertOptions } from "react-native"

export default class Alert {

    public static showAlert(title: string, message: string, buttons?: AlertButton[], options?: AlertOptions) {
        setTimeout(() => AlertComponent.alert(title, message, buttons, options), 500);
    }
}