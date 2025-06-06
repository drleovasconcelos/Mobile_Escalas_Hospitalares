import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CardList from "./components/card-list/card-list";
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import { SafeAreaView } from 'react-native';
import GlasgowComaScaleApp from "./pages/Glasgow/glasgow_index";
import AshworthScaleApp from './pages/Ashworth/ashworth_index'
import WexlerScaleApp from './pages/Wexler/wexler_index'
import AVPUScaleApp from './pages/AVPU/avpu_index'
import RamsayScaleApp from './pages/Ramsay/ramsay_index'
import RASSScaleApp from './pages/Rass/rass_index'
import CincinnatiScaleApp from './pages/Cincinnati/cincinnati_index'
import RankinScaleApp from './pages/Rankin/rankin_index'
import MRCScaleApp from './pages/MRC/mrc_index'
import CAMICUScaleApp from './pages/CAM-ICU/CAMICU_index'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CardList} options={{ title: "Escalas Hospitalares" }} />
          <Stack.Screen name="Glasgow" component={GlasgowComaScaleApp} options={{ title: "Escala de Glasgow" }} />
          <Stack.Screen name="Ashworth" component={AshworthScaleApp} options={{ title: "Escala de Ashworth" }} />
          <Stack.Screen name="Wexler" component={WexlerScaleApp} options={{ title: "Escala de Wexler" }} />
          <Stack.Screen name="AVPU" component={AVPUScaleApp} options={{ title: "Escala de AVPU" }} />
          <Stack.Screen name="Ramsay" component={RamsayScaleApp} options={{ title: "Escala de Ramsay" }} />
          <Stack.Screen name="Rass" component={RASSScaleApp} options={{ title: "Escala de Rass" }} />
          <Stack.Screen name="Rankin" component={RankinScaleApp} options={{ title: "Escala de Rankin" }} />
          <Stack.Screen name="MRC" component={MRCScaleApp} options={{ title: "Escala de MRC" }} />
          <Stack.Screen name="Cincinnati" component={CincinnatiScaleApp} options={{ title: "Escalas Cincinnati" }} />
          <Stack.Screen name="CAMICU" component={CAMICUScaleApp} options={{ title: "Escalas CAM-ICU" }} />
          {/* <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="Configurações" component={ConfiguracoesScreen} />
          <Stack.Screen name="Login" component={LoginScreen} /> */}

        </Stack.Navigator>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}
