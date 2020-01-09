import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default function EncounterResult({ monsters, difficulty, experienceTotal, experiencePerPlayer }) {
  const regenerateResult = () => {
    console.log("Regen! Still TODO");
  }

  const renderMonster = (monster) => {
    return (
      <View>
        <Text>{monster.name}</Text>
        <Text>{monster.size} {monster.type}</Text>
        <Text>CR {monster.cr}</Text>
        <Text>Description: {monster.link}</Text>
      </View>
    );
  };
  
  return (
    <View>
      <FlatList
        data={monsters}
        renderItem={renderMonster}
      />
      <Text>Difficulty: {difficulty}</Text>
      <Text>Encounter Experience: {experienceTotal}</Text>
      <Text>Per Player: {experiencePerPlayer}</Text>
      <Button title={'Regenerate'} onClick={regenerateResult}/>
    </View>
  );
}

const styles = StyleSheet.create({
});

// TODO use redux
EncounterResult.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object).isRequired,
  difficulty: PropTypes.string.isRequired,
  experienceTotal: PropTypes.number.isRequired,
  experiencePerPlayer: PropTypes.number.isRequired,
};