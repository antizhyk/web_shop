import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from "./Header/HeaderReducer";

let reducers = combineReducers({
Header: HeaderReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
