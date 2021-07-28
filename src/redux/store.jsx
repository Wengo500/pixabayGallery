  
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'

import jsonObjReducer from './reducers/jsonObjReducer';
 

const reducers = combineReducers({
  jsonObj: jsonObjReducer,
});

const store = createStore(
  reducers,
    applyMiddleware(
      ReduxThunk
    )
);

export default store;