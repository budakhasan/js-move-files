import { findIndex } from './functions';
import { List } from '../types/types';

describe('utility functions', () => {
  it('find correct index by key', () => {
    const maxLength = 10000;
    const testArray: List[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= maxLength; i++) {
      testArray.push({ id: `${i}`, name: `Name ${i}`, files: [] });
    }
    expect(findIndex(testArray, 'id', maxLength.toString())).toStrictEqual(maxLength);
  });
});
