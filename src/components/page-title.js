import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Divider from './divider';

export default function PageTitle({ title, subtitle }) {

  return (
    <View style={styles.titleSection}>
      <Text style={styles.title}>{title}</Text>
      {subtitle &&
        <Text style={styles.subtitle}>{subtitle}</Text>
      }
      <Divider />
    </View>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

const styles = StyleSheet.create({
  titleSection: {
    alignItems: 'center',
    marginBottom: 15,
    marginBottom: 18,
  },
  title: {
    fontSize: 55,
    fontWeight: '800',
    // fontFamily: 'nodesto-caps-condensed',
    color: '#58170D',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
    marginBottom: 6,
  },
});