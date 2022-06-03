const SET_SPACE = 'SET_SPACE';

const defultState = {
  space: 0,
  usedSpace: 0,
};

export default function diskReducer(state = defultState, action) {
  switch (action.type) {
    case SET_SPACE:
      return {
        ...state,
        space: action.payload.space,
        usedSpace: action.payload.usedSpace,
      };
    default:
      return state;
  }
}

export const setDiskInfo = (diskInfo) => ({
  type: SET_SPACE,
  payload: diskInfo,
});
