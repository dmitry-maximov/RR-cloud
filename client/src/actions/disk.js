import DiskService from '../api/DiskService';
import { setDiskInfo } from '../reducers/diskReducer';

export const getDiskInfo = () => {
  return async (dispatch) => {
    try {
      const response = await DiskService.getInfo();
      dispatch(setDiskInfo(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
