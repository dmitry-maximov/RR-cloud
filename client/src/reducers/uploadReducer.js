const SHOW_UPLOADER = 'SHOW_UPLOADER';
const HIDE_UPLOADER = 'HIDE_UPLOADER';
const ADD_FILE_UPLOADER = 'ADD_FILE_UPLOADER';
const REMOVE_FILE_UPLOADER = 'REMOVE_FILE_UPLOADER';
const CHANGE_FILE_UPLOADER = 'CHANGE_FILE_UPLOADER';

const defaultState = {
  isVisible: false,
  files: [],
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_UPLOADER:
      return { ...state, isVisible: true };
    case HIDE_UPLOADER:
      return { ...state, isVisible: false };
    case ADD_FILE_UPLOADER:
      return { ...state, files: [...state.files, action.payload] };
    case REMOVE_FILE_UPLOADER:
      return {
        ...state,
        files: [...state.files.filter((file) => file.id != action.payload)],
      };
    case CHANGE_FILE_UPLOADER:
      return {
        ...state,
        files: [
          ...state.files.map((file) =>
            file.id == action.payload.id
              ? { ...file, progress: action.payload.progress }
              : { ...file }
          ),
        ],
      };
    default:
      return state;
  }
}

export const showUploader = () => ({ type: SHOW_UPLOADER });
export const hideUploader = () => ({ type: HIDE_UPLOADER });
export const addUploadFile = (file) => ({
  type: ADD_FILE_UPLOADER,
  payload: file,
});
export const removeUploadFile = (fileId) => ({
  type: REMOVE_FILE_UPLOADER,
  payload: fileId,
});
export const changeUploadFile = (payload) => ({
  type: CHANGE_FILE_UPLOADER,
  payload: payload,
});
