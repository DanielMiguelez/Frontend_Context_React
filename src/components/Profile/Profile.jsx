import React, { useContext, useEffect} from 'react'
import { UserContext } from '../../context/UserContext/UserState';
import { Flex, Spin } from 'antd';
import Card from 'antd/es/card/Card';
import './Profile.css'

const Profile = () => {

  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo(); 
}, []);
  
return (
  <div className='container-profile'>
    <div className='containerPerfil'>
        {user ? (
          <div>
            <Card title={user.name}  variant="borderless" style={{ width: 350 }}>
                <h1>Profile de {user.name}</h1>
                    <h2>Nombre: {user.name}</h2>
                    <p>Email: {user.email}</p>
                    
            </Card>
            <p>{user.orderIds.map(order=> order.productIds.map(product=> <span> Producto : {product.name}<br></br></span>))}</p>
          </div>
        ) : (
          
          <Spin size="large" />
        )}
    </div>
  </div>
);
}

export default Profile