const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';
const PUSH_TO_HISTORY = 'PUSH_TO_STACK';
const SET_LIST_VIEW = 'SET_LIST_VIEW';
const SET_PLATE_VIEW = 'SET_PLATE_VIEW';

const defaultState = {
  files: [],
  currentDir: null,
  history: [],
  view: 'list',
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload };
    case PUSH_TO_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case SET_LIST_VIEW:
      return { ...state, view: 'list' };
    case SET_PLATE_VIEW:
      return { ...state, view: 'plate' };
    default:
      return state;
  }
}

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (currentDir) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir,
});
export const pushToHistory = (dir) => ({ type: PUSH_TO_HISTORY, payload: dir });
export const setListView = () => ({ type: SET_LIST_VIEW });
export const setPlateView = () => ({ type: SET_PLATE_VIEW });
