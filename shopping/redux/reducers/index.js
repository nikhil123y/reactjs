import { combineReducers } from "redux";
import { ProductReducer,selectedProductReducer } from "./ProductReduce";

const reducers=combineReducers({
    allProducts:ProductReducer,
    product:selectedProductReducer,
})

export default reducers