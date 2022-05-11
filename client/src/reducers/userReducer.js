const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logOut = () => ({ type: LOGOUT });
