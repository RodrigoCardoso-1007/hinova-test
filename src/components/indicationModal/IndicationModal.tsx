import { useState } from 'react'
import { Modal, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import { Alert } from '../../module';
import { IIndicationInput } from '../../module/network/endpoints/indication/Indication.interface';
import IndicationRequest from '../../module/network/endpoints/indication/Indication.request';

import { Header, TextInput, TextLine, Button } from "../index";
import IIndicationModalProps from "./IndicationModal.interface";
import Style from './IndicationModal.style';

export default function IndicationModal(props: IIndicationModalProps) {

    const { visible, currentStore, closeModal } = props;

    const [nameAssociate, setNameAssociate] = useState<string>('');
    const [cpfAssociate, setCpfAssociate] = useState<string>('');
    const [emailAssociate, setEmailAssociate] = useState<string>('');
    const [telephoneAssociate, setTelephoneAssociate] = useState<string>();
    const [boardAssociate, setBoardAssociate] = useState<string>('');

    const [nameFriend, setNameFriend] = useState<string>('');
    const [emailFriend, setEmailFriend] = useState<string>('');
    const [telephoneFriend, setTelephoneFriend] = useState<string>();

    const [observation, setObservation] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    function onSubmit() {
        const dto: IIndicationInput = {
            Indicacao: {
                CodigoAssociacao: currentStore,
                CpfAssociado: cpfAssociate,
                EmailAssociado: emailAssociate,
                NomeAssociado: nameAssociate,
                TelefoneAssociado: telephoneAssociate,
                PlacaVeiculoAssociado: boardAssociate,

                EmailAmigo: emailFriend,
                NomeAmigo: nameFriend,
                TelefoneAmigo: telephoneFriend,

                Observacao: observation,
                DataCriacao: new Date()
            },
            Remetente: emailAssociate,
            Copias: []
        }

        sendIndication(dto);
    }

    function sendIndication(dto: IIndicationInput) {
        setLoading(true);

        IndicationRequest.createIndication(dto).then((res) => {
            if (res?.Sucesso) {
                Alert.showAlert('Sucesso', res?.Sucesso || 'Indicação enviada com sucesso', [{ text: 'Ok', onPress: onRequestClose }]);
            } else {
                requestError(res?.RetornoErro?.message);
            }
        }).catch((error) => {
            requestError(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    function requestError(errorMessage?: string) {
        Alert.showAlert('Erro', errorMessage || 'Não foi possível enviar a indicação.\nTente novamente mais tarde.');
    }

    function clearInputs() {
        setNameAssociate('');
        setCpfAssociate('');
        setEmailAssociate('');
        setTelephoneAssociate(undefined);
        setBoardAssociate('');

        setNameFriend('');
        setEmailFriend('');
        setTelephoneFriend(undefined);

        setObservation('');
    }

    function onRequestClose() {
        clearInputs();
        closeModal();
    }

    const behavior = Platform.OS === "ios" ? "padding" : "height"

    return (
        <Modal
            animationType={"slide"}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <Header headerText={"Indicar amigo"} onPressBack={onRequestClose} />

            <KeyboardAvoidingView behavior={behavior} style={{ flex: 1 }} >
                <ScrollView style={[Style.containerStyle]}>

                    <View style={[Style.textLineStyle]}>
                        <TextLine text={'Associado'} />
                    </View>

                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Nome'}
                            value={nameAssociate}
                            onChange={(e) => setNameAssociate(e)}
                        />
                    </View>
                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'CPF'}
                            value={cpfAssociate}
                            onChange={(e) => setCpfAssociate(e)}
                        />
                    </View>
                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Email'}
                            value={emailAssociate}
                            keyboardType={'email-address'}
                            onChange={(e) => setEmailAssociate(e)}
                        />
                    </View>
                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Telefone'}
                            value={telephoneAssociate || ''}
                            keyboardType={"numeric"}
                            onChange={(e) => setTelephoneAssociate(e)}
                        />
                    </View>
                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Placa'}
                            value={boardAssociate}
                            onChange={(e) => setBoardAssociate(e)}
                        />
                    </View>

                    <View style={[Style.textLineStyle]}>
                        <TextLine text={'Amigo'} />
                    </View>

                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Nome'}
                            value={nameFriend}
                            onChange={(e) => setNameFriend(e)}
                        />
                    </View>

                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Email'}
                            value={emailFriend}
                            keyboardType={'email-address'}
                            onChange={(e) => setEmailFriend(e)}
                        />
                    </View>

                    <View style={[Style.formStyle]}>
                        <TextInput
                            label={'Telefone'}
                            value={telephoneFriend || ''}
                            keyboardType={"numeric"}
                            onChange={(e) => setTelephoneFriend(e)}
                        />
                    </View>

                    <View style={[Style.textLineStyle]}>
                        <TextLine text={'Observação'} />
                    </View>

                    <View style={[Style.formStyle]}>
                        <TextInput
                            value={observation}
                            multiLines
                            onChange={(e) => setObservation(e)}
                        />
                    </View>

                    <View style={[Style.buttonContainer]}>
                        <Button text={'Enviar'} loading={loading} onPress={onSubmit} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    )
}