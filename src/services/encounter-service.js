import { mockData } from '../constants';

export default class EncounterService {
  static generateEncounter(request) {
    console.log('Todo based off request', request);

    return mockData;
  }
}