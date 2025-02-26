import {createContext} from 'react';
import axios from 'axios'

const initialState = {}

const API_URL = "http://localhost:8080"

export const OrderContext = createContext(initialState)

export const OrderProvider = ({children}) => {

    const createOrder = async(order) =>{

        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.post(API_URL + "/orders/createOrder", {productIds:order}, {
            headers:{
                authorization:token
            }
        });
        return response
    };

    return (
        <OrderContext.Provider
            value={{
                createOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}