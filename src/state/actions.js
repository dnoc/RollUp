import { mockData } from '../constants';
import { ENCOUNTER_CREATED } from './action-types';

export function createEncounter(request) {
  // TODO make a service call here to get result
  return {
    type: ENCOUNTER_CREATED,
    payload:{
      request: request,
      result: mockData,
    },
  };
};