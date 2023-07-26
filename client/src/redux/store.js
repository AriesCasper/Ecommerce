// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// //import { getProducts } from '../../../server/controller/product-controller';
// import thunk from 'redux-thunk';
// import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';

// const reducer = combineReducers({
//     getProducts: getProductsReducer,
//     getProductDetails: getProductDetailsReducer 
// });

// const middleware = [thunk];
// const store = createStore (
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))

// )

// export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;