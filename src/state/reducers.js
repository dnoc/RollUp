import { ENCOUNTER_CREATED } from './action-types';
import { mockData } from '../constants';

const DEFAULT_STATE = {
  request: {
    numberOfPlayers: 4,
    playerLevel: 1,
    difficulty: 'medium',
    setting: undefined,
    enemyType: undefined,
  },
  result: mockData,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ENCOUNTER_CREATED:
      state = action.payload;
    default:
      return state;
  }
};