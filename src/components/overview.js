import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Divider from './divider';

export default function Overview({ difficulty, experienceTotal, experiencePerPlayer }) {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  
  return (
    <View style={styles.overview}>
      <Text style={styles.heading}>
        Difficulty: {capitalize(difficulty)}
      </Text>
      <Text style={styles.heading}>
        Total Experience: {experienceTotal} XP
      </Text>
      <Text style={[styles.heading, styles.lastHeading]}>
        Per Player: {experiencePerPlayer} XP
      </Text>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  lastHeading: {
    marginBottom: 15,
  },
});

Overview.propTypes = {
  difficulty: PropTypes.string.isRequired,
  experienceTotal: PropTypes.number.isRequired,
  experiencePerPlayer: PropTypes.number.isRequired,
};