import { addFile, setFiles } from '../reducers/fileReducer';
import FileService from '../api/FileServices';
import { $auth_api } from '../api';
import {
  addUploadFile,
  changeUploadFile,
  showUploader,
} from '../reducers/uploadReducer';

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

export const uploadFile = (file, dirId) => {
  return async (dispatch) => {
    try {
      // const response = await FileService.uploadFile(file, dirId);
      const formData = new FormData();
      formData.append('file', file);

      if (dirId) {
        formData.append('parent', dirId);
      }

      const uploadFile = { name: file.name, progress: 0, id: Date.now() };
      dispatch(showUploader());
      dispatch(addUploadFile(uploadFile));
      const response = await $auth_api.post(`files/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader(
                'x-decompressed-content-length'
              );
          if (totalLength) {
            uploadFile.progress = Math.round(
              (progressEvent.loaded * 100) / totalLength
            );
            dispatch(changeUploadFile(uploadFile));
            console.log(uploadFile.progress);
          }
        },
      });
      dispatch(addFile(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const downloadFile = async (fileId) => {
  try {
    const response = await FileService.downloadFile(fileId);
    return response;
  } catch (e) {
    alert(e.response.data.message);
  }
};
