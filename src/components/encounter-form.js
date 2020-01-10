import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import PropTypes from 'prop-types';

export default function EncounterForm({
  numberOfPlayers = 4,
  playerLevel = 1,
  difficulty = 'medium',
  setting,
  enemyType,
}) {
  // it'd be insane if there's not an easier way to do this in js
  const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  const onSubmit = (event) => {
    console.log("submitted", event);
  };

  return (
    <View>
      <TextInput 
        keyboardType={'number-pad'} 
        maxLength={2}
        placeholder={'Number of players'}
      />
      {/* <Picker
        selectedValue={playerLevel}
        placeholder={'Character level'}
      >
        {levelRange.map((number) => {<Picker.Item label={number} value={number} key={number}/>})}
      </Picker> */}
      <Picker
        selectedValue={difficulty}
        placeholder={'Difficulty'}
      >
        <Picker.Item label={'Easy'} value={'easy'}/>
        <Picker.Item label={'Medium'} value={'medium'}/>
        <Picker.Item label={'Hard'} value={'hard'}/>
        <Picker.Item label={'Deadly'} value={'deadly'}/>
      </Picker>
      <Picker
        selectedValue={setting}
        placeholder={'Encounter setting'}
      >
        <Picker.Item label={'City'} value={'city'}/>
        <Picker.Item label={'Forest'} value={'forest'}/>
        <Picker.Item label={'Mountain'} value={'mountain'}/>
        <Picker.Item label={'Ocean'} value={'ocean'}/>
        <Picker.Item label={'Dungeon'} value={'dungeon'}/>
      </Picker>
      <Picker
        selectedValue={enemyType}
        placeholder={'Enemy type'}
      >
        <Picker.Item label={'Aberration'} value={'aberration'}/>
        <Picker.Item label={'Beast'} value={'beast'}/>
        <Picker.Item label={'Celestial'} value={'celestial'}/>
        <Picker.Item label={'Dragon'} value={'dragon'}/>
        <Picker.Item label={'Elemental'} value={'elemental'}/>
        <Picker.Item label={'Fiend'} value={'fiend'}/>
        <Picker.Item label={'Fey'} value={'fey'}/>
        <Picker.Item label={'Giant'} value={'giant'}/>
        <Picker.Item label={'Humanoid'} value={'humanoid'}/>
        <Picker.Item label={'Undead'} value={'undead'}/>
        <Picker.Item label={'Monstrosity'} value={'monstrosity'}/>
      </Picker>
      <Button
        title={'Generate'} 
        onPress={() => onSubmit()}
      />
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
});