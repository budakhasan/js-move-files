import ERRORS from './types/contants';
import { File, List } from './types/types';
import { findIndex } from './utils/functions';

export default function move<T extends List, U extends string>(
  list: T[],
  source: U,
  destination: U,
): T[] {
  // throw error if given list is empty
  if (list.length === 0) throw new Error(ERRORS.EMPTY_LIST);
  // Check destination_id is match with any folder. If not throw error
  const destinationFolderIndex = findIndex(list, 'id', destination);
  if (destinationFolderIndex === -1) throw new Error(ERRORS.DESTINATION_IS_A_FILE);
  /*
   * I used traditional `for loop` because performance reasons.
   * the given `list` can be contain huge list
   */
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < list.length; i++) {
    const folder: T = list[i];
    // Throw error if source id matches with any folder
    if (folder.id === source) throw new Error(ERRORS.MOVE_FOLDER);
    const sourceFileIndex = findIndex(folder.files, 'id', source);
    if (sourceFileIndex > -1) {
      // cut the file from source folder
      const foundFile: File = folder.files.splice(sourceFileIndex, 1)[0];
      // paste file to new location
      list[destinationFolderIndex].files.push(foundFile);
      // exit loop
      break;
    }
  }
  return list;
}
