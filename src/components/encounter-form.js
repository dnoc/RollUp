import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Picker, Slider, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

export default function EncounterForm({
  numberOfPlayers = 4,
  playerLevel = 1,
  difficulty = 'medium',
  setting,
  enemyType,
}) {

  const difficultyData = [
    { label: 'Easy', value: 'easy', },
    { label: 'Medium', value: 'medium', },
    { label: 'Hard', value: 'hard', },
    { label: 'Deadly', value: 'deadly', },
  ];

  const settingData = [
    { label: 'City', value: 'city', },
    { label: 'Forest', value: 'forest', },
    { label: 'Mountain', value: 'mountain', },
    { label: 'Ocean', value: 'ocean', },
    { label: 'Dungeon', value: 'dungeon', },
  ];

  const enemyTypeData = [
    { label: 'Aberration', value: 'aberration', },
    { label: 'Beast', value: 'beast', },
    { label: 'Celestial', value: 'celestial', },
    { label: 'Dragon', value: 'dragon', },
    { label: 'Elemental', value: 'elemental', },
    { label: 'Fiend', value: 'fiend', },
    { label: 'Fey', value: 'fey', },
    { label: 'Giant', value: 'giant', },
    { label: 'Humanoid', value: 'humanoid', },
    { label: 'Undead', value: 'undead', },
    { label: 'Monstrosity', value: 'monstrosity', },
  ];
  
  const onSubmit = (event) => {
    console.log("submitted", event);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.titleSection, styles.formItem]}>
        <Text style={styles.title}>Roll Up!</Text>
        <Text style={styles.subtitle}>Generate your encounter</Text>
        <View style={styles.divider} />
      </View>
      <TextInput 
        keyboardType={'number-pad'} 
        maxLength={2}
        placeholder={'Number of players'}
        style={[styles.players, styles.formItem]}
      />
      <View style={styles.formItem}>
        <Text>Character Level</Text>
        <Slider
          value={playerLevel}
          minimumValue={1}
          maximumValue={20}
          style={styles.level}
        />
      </View>
      <Dropdown
        label={'Difficulty'}
        data={difficultyData}
        style={[styles.dropdown, styles.formItem]}
      />
      <Dropdown
        label={'Encounter Setting'}
        data={settingData}
        style={[styles.dropdown, styles.formItem]}
      />
      <Dropdown
        label={'Enemy Type'}
        data={enemyTypeData}
        style={[styles.dropdown, styles.formItem]}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit()}
      >
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

// TODO use redux
EncounterForm.propTypes = {
  numberOfPlayers: PropTypes.number,
  playerLevel: PropTypes.number,
  difficulty: PropTypes.string,
  setting: PropTypes.string,
  enemyType: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 15,
  },
  formItem: {
    marginBottom: 18,
  },
  title: {
    fontSize: 55,
    fontWeight: '800',
    // fontFamily: 'nodesto-caps-condensed',
    color: '#58170D',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
    marginBottom: 6,
  },
  divider: {
    height: 3,
    width: '100%',
    backgroundColor: '#C9AD6A',
  },
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