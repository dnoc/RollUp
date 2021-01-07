import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import LargeButton from './large-button';

export default function SimpleSample({ navigation }) {
  return (
    <View>
      <Text>Well at least this works.</Text>
      <LargeButton
        onPress={() => navigation.navigate('form')}
        title={'To Form'}
      />
    </View>
  );
}

SimpleSample.propTypes = {
  navigation: PropTypes.object.isRequired,
};