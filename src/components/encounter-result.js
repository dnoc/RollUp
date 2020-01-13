import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import MonsterList from './monster-list';
import LargeButton from './large-button';
import BackButton from './back-button';
import Overview from './overview';

export default function EncounterResult({ monsters, difficulty, experienceTotal, experiencePerPlayer }) {
  const regenerateResult = () => {
    console.log("Regen! Still TODO");
  };

  const goBack = () => {
    console.log("Go back! still TODO");
  };
  
  return (
    <View style={styles.container}>
      <BackButton 
        onPress={goBack}
        buttonStyles={styles.backButton}
      />
      <PageTitle title={'Results'}/>
      <Overview 
        difficulty={difficulty}
        experienceTotal={experienceTotal}
        experiencePerPlayer={experiencePerPlayer}
      />
      <MonsterList monsterList={monsters}/>
      <LargeButton title={'Regenerate'} onPress={regenerateResult}/>
    </View>
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

// TODO use redux
EncounterResult.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object).isRequired,
  difficulty: PropTypes.string.isRequired,
  experienceTotal: PropTypes.number.isRequired,
  experiencePerPlayer: PropTypes.number.isRequired,
};