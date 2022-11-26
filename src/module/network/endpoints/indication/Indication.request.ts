import RestApi from './../../RestApi.module';

import { IIndicationInput } from './Indication.interface';

export default class IndicationRequest {
    public static URL_INDICATION = `${RestApi.URL}/Indicacao`;

    public static createIndication(dto: IIndicationInput): Promise<any> {
        return RestApi.httpPost(`${this.URL_INDICATION}/enviarIndicacao`, dto).then((response) => response);
    }
}
