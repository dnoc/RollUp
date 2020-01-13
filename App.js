import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import EncounterForm from './src/components/encounter-form';
import EncounterResult from './src/components/encounter-result';
import SimpleSample from './src/components/simple-sample';
import StainBackground from './assets/stain-background.png';
import { mockData } from './src/constants';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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

  return (
    <Provider store={store}>
      <ImageBackground
        source={StainBackground}
        style={{width: '100%', height: '100%'}}
      >
        <View style={styles.container}>
          <EncounterForm />
          {/* <SimpleSample /> */}
          {/* <EncounterResult 
            monsters={mockData.monsters}
            difficulty={mockData.difficulty}
            experienceTotal={mockData.experienceTotal}
            experiencePerPlayer={mockData.experiencePerPlayer}
          /> */}
        </View>
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
