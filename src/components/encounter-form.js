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

  // TODO I'm pretty sure I should use native stuff instead of form / label
  return (
    <View>
      <form onSubmit={onSubmit}>
        <label>
        Number of players
          <TextInput
            defaultValue={numberOfPlayers} 
            keyboardType={'numeric'} 
            maxLength={2}
          />
        </label>
        <label>
          Character level
          <Picker selectedValue={playerLevel}>
            {levelRange.map((number) => <Picker.Item label={number} value={number} key={number}/>)}
          </Picker>
        </label>
        <label>
          Difficulty
          <Picker selectedValue={difficulty}>
            <Picker.Item label={'Easy'} value={'easy'}/>
            <Picker.Item label={'Medium'} value={'medium'}/>
            <Picker.Item label={'Hard'} value={'hard'}/>
            <Picker.Item label={'Deadly'} value={'deadly'}/>
          </Picker>
        </label>
        <label>
          Encounter setting
          <Picker selectedValue={setting}>
            <Picker.Item label={'City'} value={'city'}/>
            <Picker.Item label={'Forest'} value={'forest'}/>
            <Picker.Item label={'Mountain'} value={'mountain'}/>
            <Picker.Item label={'Ocean'} value={'ocean'}/>
            <Picker.Item label={'Dungeon'} value={'dungeon'}/>
          </Picker>
        </label>
        <label>
          Enemy type
          <Picker selectedValue={enemyType}>
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
        </label>
        <Button title={'Generate'} />
      </form>
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