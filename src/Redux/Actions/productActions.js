import axios from "axios";


import {ALL_PRODUCT_FAIL,ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,CLEAR_ERROR, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS} from "../Types/productConstants";


export const getAllProducts=async(dispatch)=>{
    dispatch({type:ALL_PRODUCT_REQUEST})
    try {
        
        //data is received from the backend and strore in payload so now payload is used as data as data is store in payload

        const {data} = await axios.get("/api/v1/products")

// console.log(data) from this we can see the data that is present in data

        dispatch({type:ALL_PRODUCT_SUCCESS,
               payload:data})
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
        
    }
}

export const clearErrors=(dispatch)=>{
    dispatch({type:CLEAR_ERROR})
}



// PRODUCT DETAIL

export const getProductDetail=(id)=>async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    try {
        const {data} = await axios.get(`/api/v1/product/${id}`)

        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
        
    } catch (error) {

        dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.response.data.massage})
        
    }
}