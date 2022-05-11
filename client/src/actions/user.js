import { setUser, logOut } from '../reducers/userReducer';
import AuthService from '../api/AuthService';

export const registration =
  (async) => (email, password, name, family, login) => {
    return async (dispatch) => {
      try {
        const response = await AuthService.registration(
          email,
          password,
          name,
          family,
          login
        );
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setUser(response.data.user));
      } catch (e) {}
    };
  };

export const login = (async) => (email, password) => {
  return async (dispatch) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setUser(response.data.user));
    } catch (e) {}
  };
};

export const logout = (async) => () => {
  return async (dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(logOut());
    } catch (e) {}
  };
};

export const checkAuth = (async) => () => {
  return async (dispatch) => {
    try {
      const response = await AuthService.checkAuth();
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setUser(response.data.user));
    } catch (e) {}
  };
};
