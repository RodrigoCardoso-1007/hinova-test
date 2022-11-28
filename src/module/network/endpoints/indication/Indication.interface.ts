import { IndicationModel } from "../../../../model";

export interface IIndicationInput {
    Indicacao: IndicationModel,
    Remetente: string,
    Copias?: string[]
}