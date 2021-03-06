import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import PageTitle from '../components/page-title';
import MonsterList from '../components/monster-list';
import LargeButton from '../components/large-button';
import BackButton from '../components/back-button';
import Overview from '../components/overview';
import ScreenWrapper from '../components/screen-wrapper';
import RequestContext from '../contexts/request-context';
import EncounterService from '../services/encounter-service';

export default function EncounterResult({
  navigation,
}) {
  const [request, ] = useContext(RequestContext);

  const [result, setResult] = useState(EncounterService.generateEncounter(request));

  const regenResult = () => {
    setResult(EncounterService.generateEncounter(request));
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton
          buttonStyles={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <PageTitle title={'Results'}/>
        <Overview
          difficulty={result.difficulty}
          experiencePerPlayer={result.experiencePerPlayer}
          experienceTotal={result.experienceTotal}
        />
        <MonsterList monsterList={result.monsters}/>
        <LargeButton onPress={regenResult} title={'Regenerate'}/>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 82,
    left: 25,
    zIndex: 100,
  },
});

EncounterResult.propTypes = {
  navigation: PropTypes.object.isRequired,
};