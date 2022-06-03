import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import fileReducer from './fileReducer';
import uploadReducer from './uploadReducer';
import diskReducer from './diskReducer';

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  uploader: uploadReducer,
  disk: diskReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
