import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";

let rootReducer = combineReducers({
    cartReducer: cartReducer,
})

export default rootReducer;
