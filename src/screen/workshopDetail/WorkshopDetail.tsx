import { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { WorkshopModel } from '../../model';
import { Mask } from '../../module';
import { Button, IndicationModal,Header } from '../../components';

import Style from './WorkshopDetail.style';

export default function WorkshopDetail() {

    const { params } = useRoute<any>();

    const [workshop, setWorkshop] = useState<WorkshopModel>(params);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header headerText={workshop.Nome} />

            <ScrollView style={[Style.container]}>
                <Image
                    style={[Style.imageStyle]}
                    source={{ uri: Mask.formatBase64(workshop.Foto) }}
                    resizeMode={'contain'}
                />

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Nome </Text>
                    <Text style={[Style.itemText]}>{workshop.Nome}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Valiação do usuários </Text>
                    <Text style={[Style.itemText]}>{workshop.AvaliacaoUsuario}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Código da associação </Text>
                    <Text style={[Style.itemText]}>{workshop.CodigoAssociacao}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Telefone </Text>
                    <Text style={[Style.itemText]}>{workshop.Telefone1} - {workshop.Telefone2}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Email </Text>
                    <Text style={[Style.itemText]}>{workshop.Email}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Endereço </Text>
                    <Text style={[Style.itemText]}>{workshop.Endereco}</Text>
                </View>

                <View style={[Style.itemContainer]}>
                    <Text style={[Style.labelStyle]}>Descrição </Text>
                    <Text style={[Style.itemText]}>{workshop.Descricao}</Text>
                </View>

                <View style={[Style.buttonContainer]}>
                    <Button text={'Indicar'} onPress={() => setModalVisible(true)} />
                </View>
            </ScrollView>

            <IndicationModal
                visible={modalVisible}
                currentStore={workshop.CodigoAssociacao}
                closeModal={() => setModalVisible(false)}
            />
        </SafeAreaView>
    )
}