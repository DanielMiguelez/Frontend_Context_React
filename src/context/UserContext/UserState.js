import { createContext, useReducer } from "react"
import axios from 'axios'
import UserReducer from "./UserReducer"

const token = JSON.parse(localStorage.getItem("token"))

const initialState = {
    token: token ? token : null,
    user: null
}

const API_URL = "http://localhost:8080"

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        console.log("Datos enviados al backend:", user);
        
        const response = await axios.post(API_URL + "/users/login", user)
        dispatch({
            type: "LOGIN",
            payload: response.data
        });
        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data.token))
            console.log("Token guardado en localStorage:", localStorage.getItem("token"));
        }
        
    };

    const logout = async () =>{
        const token = JSON.parse(localStorage.getItem("token"));

        const response = await axios.delete(API_URL + "/users/logout", {
            headers:{
                authorization:token,
            }
        })
        dispatch({
            type: "LOGOUT",
            payload:response.data
        });

        if(response.data){
            localStorage.removeItem("token")
        }
    }


    const getUserInfo = async()=>{
        const token = JSON.parse(localStorage.getItem("token"))

        if (!token) {
            console.error("No token found. User is not authenticated.");
            return;
        }

        const response = await axios.get(API_URL + "/users/getInfo", {
            headers:{
                authorization: token,
            }
        });

        dispatch({
            type:"GET_INFO",
            payload: response.data.infoUser
        });
        return response
    };


    // AQUI PROVEEMOS AL RESTO DE COMPONENTES 

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                getUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};