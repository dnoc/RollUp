import { Difficulties, Settings, EnemyTypes } from './categories';

export const difficultyData = [
  { label: 'Easy', value: Difficulties.EASY, },
  { label: 'Medium', value: Difficulties.MEDIUM, },
  { label: 'Hard', value: Difficulties.HARD, },
  { label: 'Deadly', value: Difficulties.DEADLY, },
];

export const settingData = [
  { label: 'City', value: Settings.CITY, },
  { label: 'Dungeon', value: Settings.DUNGEON, },
  { label: 'Feywild', value: Settings.FEYWILD, },
  { label: 'Forest', value: Settings.FOREST, },
  { label: 'Mountain', value: Settings.MOUNTAIN, },
  { label: 'Ocean', value: Settings.OCEAN, },
];

export const enemyTypeData = Object.values(EnemyTypes).map((type) => {
  return {
    value: type,
  };
});