export default class RestAPI {

    public static URL = `http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api`;

    public static async httpMethod(method: string, url: string, body?: any) {
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
    }

    public static httpGet = (url: string) => this.httpMethod("GET", url).then((res) => res.json());
    public static httpPost = (url: string, body: any) => this.httpMethod("POST", url, body).then((res) => res.json());
}
