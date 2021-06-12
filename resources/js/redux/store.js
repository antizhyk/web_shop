import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from "./Header/HeaderReducer";
import FooterReducer from "./Footer/FooterReducer";

let reducers = combineReducers({
    Header: HeaderReducer,
    Footer: FooterReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
