import React, { useEffect } from 'react';
import EncounterForm from './src/components/encounter-form';
import EncounterResult from './src/components/encounter-result';
import SimpleSample from './src/components/simple-sample';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const rootReducer = (state = {}, action) => {
  return state;
};
const store = createStore(rootReducer);

export default function App() {
  useEffect(() => {
    loadFont();
  }, []);

  async function loadFont() {
    await Font.loadAsync({
      'nodesto-caps-condensed': require('./assets/fonts/Nodesto/Nodesto-Caps-Condensed.otf'),
    });
  }

  const Stack = createStackNavigator();
  //   {
  //   headerMode: 'none',
  //   navigationOptions: {
  //     headerVisible: false,
  //   },
  // });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="sample">
          <Stack.Screen name="sample" component={SimpleSample} />
          <Stack.Screen name="form" component={EncounterForm} />
          <Stack.Screen name="result" component={EncounterResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
