import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import EncounterForm from 'src/components/encounter-form.js'

export default function App() {
  return (
    // TODO <ImageBackground />
    <View style={styles.container}>
      <EncounterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
