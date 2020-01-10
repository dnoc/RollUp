import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import EncounterForm from './src/components/encounter-form.js';
import StainBackground from './assets/stain-background.png';

export default function App() {
  return (
    <ImageBackground
      source={StainBackground}
      style={{width: '100%', height: '100%'}}
    >
      <View style={styles.container}>
        <EncounterForm />
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
