import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../colors';

export default function Picker({ icon, label, options, onSelect, style }) {
  const [currentLabel, setCurrentLabel] = useState(label);
  const [modalVisible, setModalVisible] = useState(false);

  const selectOption = (option) => {
    setCurrentLabel(option);
    onSelect(option);
    setModalVisible(false);
  };

  const renderOptions = ({ item: option }) => {
    return (
      <TouchableOpacity
        onPress={() => selectOption(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.button, style]}
      >
        <Text style={styles.buttonText}>{currentLabel}</Text>
        {icon &&
          <View style={styles.iconContainer}>
            {icon}
          </View>
        }
      </TouchableOpacity>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderOptions}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

Picker.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.object,
};

// TODO
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.opaqueGrey(),
    borderRadius: 6,
  },
  buttonText: {
    padding: 12,
    fontSize: 20,
    fontWeight: '600',
    color: Colors.bookRed(),
  },
  iconContainer: {
    alignSelf: 'flex-end',
    height: 10,
  },
  modalBackground: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: Colors.opaqueBlack(),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  optionText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'center',
  },
});