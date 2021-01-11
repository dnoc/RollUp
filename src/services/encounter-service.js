import { mockData } from '../data/constants';

export default class EncounterService {
  static generateEncounter(request) {
    console.log('Todo based off request', request);
    const result = mockData[Math.floor(Math.random() + 0.5)];
    console.log('result ', result);

    return result;
  }
}