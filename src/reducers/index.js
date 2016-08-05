import { combineReducers } from 'redux';
import SearchCity from './search_bar_reducer';

const rootReducer = combineReducers({
  weather: SearchCity
});

export default rootReducer;
