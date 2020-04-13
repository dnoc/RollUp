import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import StainBackground from '../../assets/stain-background.png';

export function ScreenWrapper({ children }) {
  
  return (
    <ImageBackground
      source={StainBackground}
      style={{width: '100%', height: '100%'}}
    >
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
}

ScreenWrapper.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});