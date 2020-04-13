import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Slider } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import PageTitle from './page-title';
import LargeButton from './large-button';
import { connect } from 'react-redux';
import { createEncounter } from '../state/actions';
import { difficultyData, settingData, enemyTypeData } from '../constants';
import { ScreenWrapper } from './screen-wrapper';

export function EncounterForm({
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
    console.log("submitted", event);
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
          title={'Roll Up!'}
          subtitle={'Generate your encounter'}
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
        <LargeButton
          disabled={submitDisabled}
          title={'Generate'}
          onPress={onSubmit}
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

export default connect(
  (state) => ({
    request: state.request,
  }),
  (dispatch) => ({
    dispatchEncounterCreated: (request) => dispatch(createEncounter(request)),
  })
)(EncounterForm);