const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';
const PUSH_TO_HISTORY = 'PUSH_TO_STACK';
const SET_LIST_VIEW = 'SET_LIST_VIEW';
const SET_PLATE_VIEW = 'SET_PLATE_VIEW';
const ADD_FILE = 'ADD_FILE';
const DELETE_FILE = 'DELETE_FILE';
const SET_SORT = 'SET_SORT';

const defaultState = {
  files: [],
  currentDir: null,
  history: [],
  view: 'list',
  sort: 'asc',
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
    case ADD_FILE:
      return { ...state, files: [...state.files, action.payload] };
    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter((item) => item.id != action.payload)],
      };
    case SET_SORT:
      return { ...state, sort: action.payload };
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
export const addFile = (file) => ({ type: ADD_FILE, payload: file });
export const deleteFile = (fileId) => ({ type: DELETE_FILE, payload: fileId });
export const setSort = (sorting) => ({ type: SET_SORT, payload: sorting });
