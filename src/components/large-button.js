import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LargeButton({ disabled = false, title, onPress, buttonStyles }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[styles.button, buttonStyles]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

LargeButton.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyles: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#58170D',
    width: '80%',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});