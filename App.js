import React, { useState } from 'react';
import EncounterForm from './src/components/encounter-form';
import EncounterResult from './src/components/encounter-result';
import SimpleSample from './src/components/simple-sample';
import EncounterRequest from './src/models/encounter-request';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import RequestContext from './src/contexts/request-context';

// eslint-disable-next-line no-undef
const nodesto = require('./assets/fonts/Nodesto/Nodesto-Caps-Condensed.otf');

export default function App() {
  const [fontsLoaded] = useFonts({
    'nodesto-caps-condensed': nodesto,
  });

  const requestContext = useState(new EncounterRequest());

  const Stack = createStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RequestContext.Provider value={requestContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'sample'} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={SimpleSample} name={'sample'} />
          <Stack.Screen component={EncounterForm} name={'form'} />
          <Stack.Screen component={EncounterResult} name={'result'} />
        </Stack.Navigator>
      </NavigationContainer>
    </RequestContext.Provider>
  );
}
