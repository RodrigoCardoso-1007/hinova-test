import { IndicacaoModel } from "../../../../model";

export interface IIndicationInput {
    Indicacao: IndicacaoModel,
    Remetente: string,
    Copias: string[]
}