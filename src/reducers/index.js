import { combineReducers } from 'redux';
import ReducerBooks from './reducers_books';
import ActiveBook from './reducers_active_book';
const rootReducer = combineReducers({
  books:ReducerBooks,
  activeBook:ActiveBook
});

export default rootReducer;
