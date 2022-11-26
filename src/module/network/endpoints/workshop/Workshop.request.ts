import RestApi from '../../RestApi.module';

export default class WorkshopRequest {
    public static URL_WORKSHOP = `${RestApi.URL}/Oficina`;

    public static getWorkshopList(associationCode: number = 601, cpfAssociado?: string): Promise<any> {
        return RestApi.httpGet(`${this.URL_WORKSHOP}?codigoAssociacao=${associationCode}&cpfAssociado=${cpfAssociado}`).then((response) => response);
    }
}
