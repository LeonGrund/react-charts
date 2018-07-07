import { combineReducers } from 'redux';

export const chart = (state = {}, action) => {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return action.data;
    case 'DELETE_DATA':
    return {};
    case 'ADD_DATA':
    return state + action.data;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  chart,
});
