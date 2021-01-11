import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import PageTitle from '../components/page-title';
import LargeButton from '../components/large-button';
import { Difficulties, Settings, EnemyTypes } from '../data/categories';
import Slider from '@react-native-community/slider';
import ScreenWrapper from '../components/screen-wrapper';
import RequestContext from '../contexts/request-context';
import Picker from '../components/picker';
import Colors from '../colors';

export default function EncounterForm({
  navigation,
}) {
  const [request, setRequest] = useContext(RequestContext);

  // TODO don't default request values, disable submit until form is complete
  // const [submitDisabled, setSubmitDisabled] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(request.numberOfPlayers);
  const [playerLevel, setPlayerLevel] = useState(request.playerLevel);
  const [difficulty, setDifficulty] = useState(request.difficulty);
  const [setting, setSetting] = useState(request.setting);
  const [enemyType, setEnemyType] = useState(request.enemyType);

  const onSubmit = () => {
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
    <ScreenWrapper>
      <View style={styles.container}>
        <PageTitle
          subtitle={'Generate your encounter'}
          title={'Roll Up!'}
        />
        <View style={styles.formItem}>
          <Text style={styles.sliderLabel}>Number of players: {numberOfPlayers}</Text>
          <Slider
            maximumTrackTintColor={Colors.opaqueGrey()}
            maximumValue={10}
            minimumTrackTintColor={'black'}
            minimumValue={1}
            onValueChange={setNumberOfPlayers}
            step={1}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.sliderLabel}>Character Level: {playerLevel}</Text>
          <Slider
            maximumTrackTintColor={Colors.opaqueGrey()}
            maximumValue={20}
            minimumTrackTintColor={'black'}
            minimumValue={1}
            onValueChange={setPlayerLevel}
            step={1}
          />
        </View>
        <Picker
          label={'Difficulty'}
          onSelect={setDifficulty}
          options={Object.values(Difficulties)}
          style={styles.formItem}
        />
        <Picker
          label={'Encounter Setting'}
          onSelect={setSetting}
          options={Object.values(Settings)}
          style={styles.formItem}
        />
        <Picker
          label={'Enemy Type'}
          onSelect={setEnemyType}
          options={Object.values(EnemyTypes)}
          style={styles.formItem}
        />
        <LargeButton
          onPress={onSubmit}
          title={'Generate'}
        />
      </View>
    </ScreenWrapper>
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
  sliderLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.bookRed(),
  },
});