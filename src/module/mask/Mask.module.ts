
export default class Mask {
    
    public static formatBase64(base64: string, format = "png") {
        return `data:image/${format};base64,${base64}`;
    }
}