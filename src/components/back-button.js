import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import LeftArrow from '../../assets/arrow-left.png';
import Colors from '../colors';

export default function BackButton({ onPress, buttonStyles }) {

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={buttonStyles}
    >
      <Image
        source={LeftArrow}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: Colors.bookRed(),
  },
});