import React from 'react';
import Bottle from '../Bottles/bottle/bottle';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={() =>{
                        handleRemoveFromCart(bottle.id)
                    }}  className='background-red'>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;