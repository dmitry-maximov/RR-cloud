import { addFile, setFiles } from '../reducers/fileReducer';
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

export const createDirectory = (name, dirId) => {
  return async (dispatch) => {
    try {
      const response = await FileService.createDirectory(name, dirId);
      dispatch(addFile(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
