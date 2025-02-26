import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductsState'
import { Card, Button } from 'antd';
import './Products.css'
import { ShoppingCartOutlined} from '@ant-design/icons';
const Products = () => {

  const {products, getProducts, addCart, cart} = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, []);

  useEffect(() => {
   localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  

  return(
   
    <div className="container-products">
      {products.map((product)=>{
        return(
          <React.Fragment>
            <div key={product._id} >
              <Card title={product.name}  variant="borderless" style={{ width: 350 }}>
              <h2>
                ID : {product._id}
              </h2>
              <span>
                Precio : {product.price}
              </span>
              <br /> <br />
              <Button onClick={()=>addCart(product)} type='primary' > <ShoppingCartOutlined/> Añadir</Button>
              </Card>
            </div>
          </React.Fragment>
        )
      }
      
      )}
      
      </div> 
      
  )
  
}

export default Products