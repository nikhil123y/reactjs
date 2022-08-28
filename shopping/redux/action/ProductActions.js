import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/Action-Type";
export const setProducts=(products)=>{

    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    };

}
export const fetchProduct=(id)=>{

    return async (dispatch)=>{
        const response= await fakeStoreApi.get(`/products/${id}`);

        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
        console.log(response)
    }   
}
export const fetchProducts=()=>{

    return async (dispatch)=>{
        const response= await fakeStoreApi.get("/products");

        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
        console.log(response)
    }   
}
export const selectedProduct=(product)=>{

    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,

    };

}
export const removeSelectedProduct=(product)=>{

    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,

    };

}