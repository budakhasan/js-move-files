import { File, List } from '../types/types';

/**
 * We use custom findIndex instead of built-in array function `findIndex` for performance issues because given list can be too big
 * ============================================================================
 * Benchmark result of Array.findIndex vs findIndex:
      1. ~%87 slower usage: Array.findIndex(item => item[key] === value)
      2. fastest: findIndex(list, key, value)
 */
export const findIndex = <T extends File | List, U extends keyof T>(
  list: T[],
  key: U,
  value: string,
): number => {
  let index = -1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    if (listItem[key] === value) {
      index = i;
      break;
    }
  }
  return index;
};

// const findFileInFolders = <T extends List[]>(folders: T, fileId: string): File | undefined => {
//   let matchedFile: File | undefined;
//
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < folders.length; i++) {
//     const folder = folders[i];
//     const foundFileIndex = findIndex(folder.files, 'id', fileId);
//     if (foundFileIndex > -1) {
//       matchedFile = folder.files[foundFileIndex];
//       break;
//     }
//   }
//   return matchedFile;
// };

export default { findIndex };
