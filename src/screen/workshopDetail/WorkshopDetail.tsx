import { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/header/Header';
import { WorkshopModel } from '../../model';
import { Mask } from '../../module';

import Style from './WorkshopDetail.style';

export default function WorkshopDetail() {

    const {params} = useRoute<any>();

    const [workshop, setWorkshop] = useState<WorkshopModel>(params);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <Header headerText={"Oficina"} />

            <ScrollView style={[Style.container]}>
                <Image
                    style={{ height: 200 }}
                    source={{ uri: Mask.formatBase64(workshop.Foto)}}
                    resizeMode={'center'}
                />

            </ScrollView>
        </SafeAreaView>
    )
}