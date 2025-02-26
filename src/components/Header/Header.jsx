import React, { useContext } from 'react'
import { Menu, Avatar, Badge, Space } from 'antd';
import { MailOutlined, UserOutlined, UserAddOutlined, LogoutOutlined, ShopOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState';
import { ProductContext } from '../../context/ProductContext/ProductsState';

const Header = () => {

  const {token, logout} = useContext(UserContext)
  const {cart} = useContext(ProductContext)

  const navigate = useNavigate()

  const onLogout = () =>{
    logout()

    setTimeout(() => {
      navigate("/")
    }, 1000);
  }
  

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="home" icon={<MailOutlined />}>
    <Link to="/"> Home</Link>
    </Menu.Item>

    <Menu.Item key="products" icon={<ShopOutlined />}>
    <Link to="/products"> Products</Link>
    </Menu.Item>

    {
      token?
      
    <div><Menu.Item key="profile" icon={<UserAddOutlined />}>
      <Link to="/Profile">Profile</Link>
    </Menu.Item> 

    <Menu.Item key="cart" icon={<ShoppingCartOutlined/>} >
    <Link to="/cart">  <Badge count={cart.length} size="small">
    </Badge> cart</Link>
    </Menu.Item>
    
    <Menu.Item key="Logout" icon={<LogoutOutlined />}  onClick={onLogout}>
      <Link to="/Logout">Logout</Link>
    </Menu.Item>
    
     </div> 
     
     :
     
     <Menu.Item key="login" icon={<UserOutlined />}>
      <Link to="/Login"> Login</Link>
      </Menu.Item>
    }
    
    <Menu.Item key="Biography" icon={<MailOutlined />}>
      Biografia
    </Menu.Item>
  </Menu>
  );
}

export default Header