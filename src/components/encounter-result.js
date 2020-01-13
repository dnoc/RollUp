import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import MonsterList from './monster-list';
import LargeButton from './large-button';
import BackButton from './back-button';
import Overview from './overview';
import { connect } from 'react-redux';
import { createEncounter } from '../state/actions';

export function EncounterResult({ 
  request,
  result,
  dispatchRecreateEncounter,
 }) {
  const regenerateResult = () => {
    console.log("Regen! Still TODO");
    dispatchRecreateEncounter(request);
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
        difficulty={result.difficulty}
        experienceTotal={result.experienceTotal}
        experiencePerPlayer={result.experiencePerPlayer}
      />
      <MonsterList monsterList={result.monsters}/>
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

EncounterResult.propTypes = {
  request: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  dispatchRecreateEncounter: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    request: state.request,
    result: state.result,
  }),
  (dispatch) => ({
    dispatchRecreateEncounter: (request) => dispatch(createEncounter(request)),
  })
)(EncounterResult);