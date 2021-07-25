import React from 'react';
import "./Cart.css"
const Cart = (props) => {
   
    // let total=0;
    // for(var i=0;i<props.carts.length;i++){
    //     let temp_amount=props.carts[i].price; 
    //     console.log(temp_amount)
    //     total+=temp_amount;
    // }
    const carts=props.carts
    var total=carts.reduce( (total,pro)=>total+pro.price,0 )
   // total =total.toFixed(5)
    const formet_number= num =>{
        const precision =num.toFixed(2) ;
        return Number(precision);
    }

    var shipping=0;
    if(total>50){
        shipping=0;
    }
    else if(total>30){
        shipping=15;
    }
    else if(total>0){
        shipping=30;
    }

    var tax=0;
    tax=total/10;


    const grand_total=total+shipping+tax

    return (
        <div className="cart">
            <h3>Order summary</h3>
            <p> <b> Item order : {carts.length}  </b></p>
            <div className="cart-body">
                <p><small>Items : ${formet_number(total)}</small></p>
                <p><small>Tax + Vat : {formet_number(tax)} $</small></p>
                <p><small>shipping : {shipping}$</small></p>
                <h3 className="cart-total">Order Total : ${formet_number(grand_total)}</h3>
            </div>
        </div>
    );
};

export default Cart;