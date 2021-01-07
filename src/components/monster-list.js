import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MonsterList({ monsterList }) {

  function renderMonster({ item: monster }) {
    return (
      <View style={styles.item}>
        <View style={styles.heading}>
          <Text style={styles.name}>
            {monster.name}
          </Text>
          <Text style={styles.cr}>
            CR {monster.cr} ({monster.xp} XP)
          </Text>
        </View>
        <Text style={styles.description}>
          {monster.size} {monster.type}
        </Text>
        <Text style={styles.description}>
          Description: {monster.page}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={monsterList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMonster}
        style={styles.list}
      />
    </View>
  );
}

MonsterList.propTypes = {
  monsterList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
  },
  list: {
    height: 'auto',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  cr: {
    fontStyle: 'italic',
    fontWeight: '500',
  },
});