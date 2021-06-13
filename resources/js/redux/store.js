import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from "./Header/HeaderReducer";
import FooterReducer from "./Footer/FooterReducer";
import SliderReducer from "./Slider/SliderReducer";
import SidebarReducer from "./Sidebar/SidebarReducer";
import ProductsReducer from "./Products/ProductsReducer";

let reducers = combineReducers({
    Header: HeaderReducer,
    Footer: FooterReducer,
    Slider: SliderReducer,
    Sidebar: SidebarReducer,
    Products: ProductsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
