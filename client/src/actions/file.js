import { setFiles } from '../reducers/fileReducer';
import FileService from '../api/FileServices';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await FileService.getFiles(dirId);
      dispatch(setFiles(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
