import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import EncounterForm from './src/components/encounter-form';
import EncounterResult from './src/components/encounter-result';
import SimpleSample from './src/components/simple-sample';
import StainBackground from './assets/stain-background.png';
import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    loadFont();
  }, []);

  async function loadFont() {
    await Font.loadAsync({
      'nodesto-caps-condensed': require('./assets/fonts/Nodesto/Nodesto-Caps-Condensed.otf'),
    });
  }

  const mockData = {
    monsters: [
      {
        name: 'Bandit',
        cr: '1/8',
        page: 'Monster Manual p.343',
        size: 'Medium',
        type: 'Humanoid',
        xp: 25,
      },
      {
        name: 'Bugbear',
        cr: '1',
        page: 'Monster Manual p.33',
        size: 'Medium',
        type: 'Humanoid',
        xp: 200,
      },
      {
        name: 'Duergar',
        cr: '1',
        page: 'Monster Manual p.33',
        size: 'Medium',
        type: 'Humanoid',
        xp: 200,
      },
    ],
    difficulty: 'deadly',
    experienceTotal: 425,
    experiencePerPlayer: 106,
  };

  return (
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
