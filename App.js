import React from 'react';
import EncounterForm from './src/components/encounter-form';
import EncounterResult from './src/components/encounter-result';
import SimpleSample from './src/components/simple-sample';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'nodesto-caps-condensed': require('./assets/fonts/Nodesto/Nodesto-Caps-Condensed.otf'),
  });

  const Stack = createStackNavigator();

  // TODO create consumer
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'sample'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={SimpleSample} name={'sample'} />
        <Stack.Screen component={EncounterForm} name={'form'} />
        <Stack.Screen component={EncounterResult} name={'result'} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
