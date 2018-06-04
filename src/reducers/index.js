import grocery from './grocery_reducer';
import shoppingBag_reducer from './shoppingBag_reducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    grocery,
    shoppingBag_reducer
});

export default rootReducer;