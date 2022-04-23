import { setUser } from '../reducers/userReducer';

export const registration = (async) => (email, password) => {
  try {
    //TO DO:
  } catch (e) {}
};

export const login = (async) => (email, password) => {
  return async (dispatch) => {
    try {
      //TO DO:
      const user = {};
      dispatch(setUser(user));
    } catch (e) {}
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      //TO DO:
      const user = {};
      dispatch(setUser(user));
      localStorage.setItem('token', user);
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
