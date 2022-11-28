import { useEffect, useState } from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WorkshopRequest from '../.././module/network/endpoints/workshop/Workshop.request'
import { Alert } from '../../module'
import { WorkshopModel } from '../../model';
import { ListItem } from './../../components';

import Loading from '../../components/loading/Loading';

import Style from './WorkshopList.style';
import Header from '../../components/header/Header';

export default function WorkshopList() {

    const navigation = useNavigation<any>();

    const [workshopList, setWorkshopList] = useState<WorkshopModel[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(getAllWorkshop, []);

    function getAllWorkshop(): void {
        setLoading(true);

        WorkshopRequest.getWorkshopList().then((res) => {
            if (res?.ListaOficinas) {
                setWorkshopList(res.ListaOficinas);
            } else {
                requestError(res?.RetornoErro?.message)
            }
        }).catch((error) => {
            requestError(error.message)
        }).finally(() => {
            setLoading(false);
        });
    }

    function requestError(errorMessage?: string) {
        Alert.showAlert('Erro', errorMessage || 'Não foi possível buscar as oficinas.\nTente novamente mais tarde.')
    }

    function onPressItem(item: WorkshopModel) {
        navigation.navigate('WorkshopDetail', item)
    }

    function renderItem(item: WorkshopModel) {
        return (
            <ListItem
                title={item.Nome}
                description={item.DescricaoCurta}
                image={item.Foto}
                numberOfLinesTitle={1}
                numberOfLinesDescription={2}
                onPressItem={() => onPressItem(item)}
            />
        );
    }

    function renderEmptyList() {
        return (
            <View style={[Style.emptyListContainer]}>
                <Text style={[Style.emptyListText]}> Nenhuma oficina encontrada. </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={[Style.containerStyle]}>
            <Header hideBackButton headerText={"Oficinas"}/>

            {loading ?
                <Loading size={60} />
                :
                <FlatList
                    style={[Style.listStyle]}
                    data={workshopList}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.Id.toString()}
                    ListEmptyComponent={renderEmptyList()}
                />
            }
        </SafeAreaView>
    );
}