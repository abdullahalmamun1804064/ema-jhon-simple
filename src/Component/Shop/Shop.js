import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
  const frist10 =fakeData.slice(0,10)
  const [products, setProducts ] = useState(frist10)
  const [carts,setCarts]=useState([])
  const handelAddproduct = (props)=>{
    //   console.log("add cart ......",props)
    const newCart=[...carts,props]
    setCarts(newCart)
  }
    return (
        <div className='container'>
            <div className="product-container">
               

                    {
                        products.map(prod => <Product 
                            product={prod} 
                            key={prod.key}
                            handelAddproduct={handelAddproduct}
                              >

                              </Product>
                            )
                    }
              
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
           
           
        </div>
    );
};

export default Shop;


