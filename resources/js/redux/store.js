import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from "./Header/HeaderReducer";
import FooterReducer from "./Footer/FooterReducer";
import SliderReducer from "./Slider/SliderReducer";

let reducers = combineReducers({
    Header: HeaderReducer,
    Footer: FooterReducer,
    Slider: SliderReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
