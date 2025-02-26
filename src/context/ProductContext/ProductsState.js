import { createContext, useReducer } from "react";
import ProductReducer from './ProductsReducer'
import axios from 'axios'

const API_URL = "http://localhost:8080"


const cart = JSON.parse(localStorage.getItem("cart"))

const initialState = {
    products: [],
    cart: cart? cart : []
}

export const ProductContext = createContext(initialState)


export const ProductsProvider = ({children}) =>{

    const [state, dispatch] = useReducer(ProductReducer, initialState)



    const getProducts = async () =>{
        const response = await axios.get(API_URL + "/products/getAllProducts")

        // action payload es el payload del dispatch, y se rellena en el reducer
        
        dispatch({
            type:"GETALLPRODUCTS",
            payload:response.data
        })
        return response.data
    };


    const addCart = (product) =>{
        dispatch({
            type:"ADDCART",
            payload:product
        })
    };

    const clearCart = () =>{
        dispatch({
            type:"CLEAR_CART"
        })
    }



    // AHORA VAMOS A PROVEER LOS METODOS DEL ESTADO------

    return(
        <ProductContext.Provider
            value= {{
                products:state.products,
                cart:state.cart,
                getProducts,
                addCart,
                clearCart
            }}>

                {children}
            </ProductContext.Provider>
    );
}