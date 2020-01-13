import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import LeftArrow from '../../assets/arrow-left.png';

export default function BackButton({ onPress, buttonStyles }) {

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={() => onPress()}
    >
      <Image
        style={styles.icon}
        source={LeftArrow}
      />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: '#58170D',
  },
});