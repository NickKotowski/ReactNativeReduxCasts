import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//there are two different states, libraries (created by libraryReducer) and selectedLibraryId
//which is created by SelectionReducer


export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
