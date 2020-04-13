import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ScreenWrapper } from './screen-wrapper';
import LargeButton from './large-button';

export default function SimpleSample({ navigation }) {
  return (
    <ScreenWrapper>
      <View>
        <Text>Well at least this works.</Text>
        <LargeButton 
          title={'To Form'}
          onPress={() => navigation.navigate('form')}
        />
      </View>
    </ScreenWrapper>
  );
}

SimpleSample.propTypes = {
  navigation: PropTypes.object.isRequired,
}