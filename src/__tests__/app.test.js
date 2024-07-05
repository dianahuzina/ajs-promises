import GameSavingLoader from '../js/GameSavingLoader';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check game saving loader', async () => {
  const saving = new GameSavingLoader();
  const result = await saving.load();
  const expected = '{ id: 9, created: 1546300800, userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 } }';
  expect(result).toEqual(expected);
});