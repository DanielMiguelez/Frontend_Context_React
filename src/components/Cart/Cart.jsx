import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductsState'
import './Cart.css'
import { List, Button } from 'antd';
import { OrderContext } from '../../context/OrderContext/OrderState';
import {ShoppingCartOutlined} from '@ant-design/icons';
const Cart = () => {

    const { cart, clearCart} = useContext(ProductContext)
    const {createOrder} = useContext(OrderContext)

    cart.map(cartItem => cartItem.name)

    const createNewOrder = () =>{
        createOrder();
        clearCart();
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <div> <h2>Products selected</h2> <List
            bordered
            dataSource={cart}
            renderItem={cartItem => (
                <List.Item>
                    {cartItem.name}
                </List.Item>
                
            )}
            
        />
        <br /><br />
        <div className='contenedorBtn'>
            <Button type="primary" onClick={clearCart}>Clear cart</Button>
            <Button onClick={createNewOrder} ><ShoppingCartOutlined /> Finalizar pedido </Button>
         </div>
        </div>
    )
}

export default Cart