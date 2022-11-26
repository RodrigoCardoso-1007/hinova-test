import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";

import { WorkshopList, WorkshopDetail } from './index';


export default function Routes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Navigator>
                    <Screen
                        name="WorkshopList"
                        component={WorkshopList}
                        options={{ headerShown: false }}
                    />

                    <Screen
                        name="WorkshopDetail"
                        component={WorkshopDetail}
                        options={{ headerShown: false }}
                    />

                </Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}