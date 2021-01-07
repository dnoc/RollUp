import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import MonsterList from './monster-list';
import LargeButton from './large-button';
import BackButton from './back-button';
import Overview from './overview';
import { ScreenWrapper } from './screen-wrapper';

export default function EncounterResult({
  navigation,
  request,
  result,
  dispatchRecreateEncounter,
}) {
  const regenerateResult = () => {
    console.log('Regen! Still TODO');
    dispatchRecreateEncounter(request);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton
          buttonStyles={styles.backButton}
          onPress={() => navigation.navigate('form')}
        />
        <PageTitle title={'Results'}/>
        <Overview
          difficulty={result.difficulty}
          experiencePerPlayer={result.experiencePerPlayer}
          experienceTotal={result.experienceTotal}
        />
        <MonsterList monsterList={result.monsters}/>
        <LargeButton onPress={regenerateResult} title={'Regenerate'}/>
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
  request: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  dispatchRecreateEncounter: PropTypes.func.isRequired,
};