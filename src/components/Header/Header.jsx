import React, { useContext } from 'react'
import { Menu } from 'antd';
import { MailOutlined, UserOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState';

const Header = () => {

  const {token, logout} = useContext(UserContext)

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

    {
      token?
      
    <div><Menu.Item key="profile" icon={<UserAddOutlined />}>
      <Link to="/Profile">Profile</Link>
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