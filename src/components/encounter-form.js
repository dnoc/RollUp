import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Slider } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import PageTitle from './page-title';
import LargeButton from './large-button';
import { difficultyData, settingData, enemyTypeData } from '../data/field-values';
import RequestContext from '../contexts/request-context';

export default function EncounterForm({
  navigation,
}) {
  const [request, setRequest] = useContext(RequestContext);

  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(request.numberOfPlayers);
  const [playerLevel, setPlayerLevel] = useState(request.playerLevel);
  const [difficulty, setDifficulty] = useState(request.difficulty);
  const [setting, setSetting] = useState(request.setting);
  const [enemyType, setEnemyType] = useState(request.enemyType);

  const onSubmit = () => {
    setSubmitDisabled(true);

    setRequest({
      numberOfPlayers: numberOfPlayers,
      playerLevel: playerLevel,
      difficulty: difficulty,
      setting: setting,
      enemyType: enemyType,
    });
    navigation.navigate('result');
  };

  return (
    <View style={styles.container}>
      <PageTitle
        subtitle={'Generate your encounter'}
        title={'Roll Up!'}
      />
      <TextInput
        keyboardType={'number-pad'}
        maxLength={2}
        onChange={setNumberOfPlayers}
        placeholder={'Number of players'}
        style={styles.formItem}
      />
      <View style={styles.formItem}>
        <Text>Character Level</Text>
        <Slider
          maximumValue={20}
          minimumValue={1}
          onChange={setPlayerLevel}
        />
      </View>
      <Dropdown
        data={difficultyData}
        label={'Difficulty'}
        onChange={setDifficulty}
        style={styles.formItem}
      />
      <Dropdown
        data={settingData}
        label={'Encounter Setting'}
        onChange={setSetting}
        style={styles.formItem}
      />
      <Dropdown
        data={enemyTypeData}
        label={'Enemy Type'}
        onChange={setEnemyType}
        style={styles.formItem}
      />
      <LargeButton
        disabled={submitDisabled}
        onPress={onSubmit}
        title={'Generate'}
      />
    </View>
  );
}

EncounterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
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
  formItem: {
    marginBottom: 18,
  },
});