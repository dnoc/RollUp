import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Slider } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import PageTitle from './page-title';
import LargeButton from './large-button';
import { difficultyData, settingData, enemyTypeData } from '../constants';
import { ScreenWrapper } from './screen-wrapper';

export default function EncounterForm({
  navigation,
  request,
  dispatchEncounterCreated,
}) {

  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(request.numberOfPlayers);
  const [playerLevel, setPlayerLevel] = useState(request.playerLevel);
  const [difficulty, setDifficulty] = useState(request.difficulty);
  const [setting, setSetting] = useState(request.setting);
  const [enemyType, setEnemyType] = useState(request.enemyType);

  const onSubmit = (event) => {
    console.log('submitted', event);
    setSubmitDisabled(true);

    const newRequest = {
      numberOfPlayers: numberOfPlayers,
      playerLevel: playerLevel,
      difficulty: difficulty,
      setting: setting,
      enemyType: enemyType,
    };
    dispatchEncounterCreated(newRequest);
    navigation.navigate('result');
  };

  // TODO use onChange={setState}
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <PageTitle
          subtitle={'Generate your encounter'}
          title={'Roll Up!'}
        />
        <TextInput
          keyboardType={'number-pad'}
          maxLength={2}
          placeholder={'Number of players'}
          style={[styles.players, styles.formItem]}
        />
        <View style={styles.formItem}>
          <Text>Character Level</Text>
          <Slider
            maximumValue={20}
            minimumValue={1}
            style={styles.level}
          />
        </View>
        <Dropdown
          data={difficultyData}
          label={'Difficulty'}
          style={[styles.dropdown, styles.formItem]}
        />
        <Dropdown
          data={settingData}
          label={'Encounter Setting'}
          style={[styles.dropdown, styles.formItem]}
        />
        <Dropdown
          data={enemyTypeData}
          label={'Enemy Type'}
          style={[styles.dropdown, styles.formItem]}
        />
        <LargeButton
          disabled={submitDisabled}
          onPress={onSubmit}
          title={'Generate'}
        />
      </View>
    </ScreenWrapper>
  );
}

EncounterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
  request: PropTypes.object.isRequired,
  dispatchEncounterCreated: PropTypes.func.isRequired,
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