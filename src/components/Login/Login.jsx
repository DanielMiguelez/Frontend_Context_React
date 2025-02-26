import React, { useContext, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import './Login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {

  const {login} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
   setTimeout(() => {
      const tokenEncontrado = JSON.parse(localStorage.getItem("token"));
      if(tokenEncontrado){
        navigate("/profile")
      }
   }, 2000);
  }, [login])

  const onFinish = (values) => {
    login(values)
    }

  return (
    <React.Fragment>
    <div className="container">

    <h2>Login Form</h2>

    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type:'email',
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </React.Fragment>
  );
};

export default Login;
