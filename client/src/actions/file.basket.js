import FileService from '../api/FileServices';
import { setFiles } from '../reducers/fileReducer';

export const getBasketFiles = (sort) => {
  return async (dispatch) => {
    try {
      const response = await FileService.basketFiles(sort);
      dispatch(setFiles(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const addToBasketFile = async (fileId) => {
  try {
    return await FileService.changeBasketFile(fileId);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const deleteFromBasketFile = async (fileId) => {
  try {
    return await FileService.changeBasketFile(fileId, false);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const clearBasket = async () => {
  try {
    return await FileService.clearBasket();
  } catch (e) {
    alert(e.response.data.message);
  }
};
