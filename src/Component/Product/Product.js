import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   const {name,img,seller,price,stock}=props.product
    return (
        <div className="product">
          <div className="product-img">
            <img src={img} alt="" />
          </div>
          <div className="product-dtail">
                <h4 className="product-name">{name}</h4>
                <p>By : {seller}</p> 
                <p>${price}</p>
                <p><small>only {stock} left is stock - order soon</small></p>
                <button 
                    onClick={()=> {props.handelAddproduct(props.product)}}
                    className="main-button"
                      >
                  <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
          </div>
        </div>
    );
};

export default Product;
