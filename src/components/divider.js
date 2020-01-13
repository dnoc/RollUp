import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 3,
    width: '100%',
    backgroundColor: '#C9AD6A',
  },
});