import { combineReducers } from 'redux';
import Preview from './reducer_preview';
const rootReducer = combineReducers({
  preview: Preview
});

export default rootReducer;
