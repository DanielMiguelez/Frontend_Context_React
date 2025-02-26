const UserReducer = (state, action)=>{
    switch(action.type){
        case"LOGIN":
        return {
            ...state, 
            token:action.payload.token
        }
        case "GET_INFO":
            // Actualiza el estado con la información del usuario
            return {
                ...state,
                user: action.payload, // El payload contiene 'infoUser'
            };
        case "LOGOUT":
            return {
                ...state,
                user:null,
                token:null
            }
    }
}
export default UserReducer;