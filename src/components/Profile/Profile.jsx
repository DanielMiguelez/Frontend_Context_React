import React, { useContext, useEffect} from 'react'
import { UserContext } from '../../context/UserContext/UserState';
import { Flex, Spin } from 'antd';

const Profile = () => {

  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo(); 
}, []);
  
return (
  <div className='containerPerfil'>
      {user ? (
          <div>
            
          <h1>Profile de {user.name}</h1>
              <h2>Nombre: {user.name}</h2>
              <p>Email: {user.email}</p>
              {/* Mostrar cualquier otra información que necesites */}
          </div>
      ) : (
        
        <Spin size="large" />
      )}
  </div>
);
}

export default Profile