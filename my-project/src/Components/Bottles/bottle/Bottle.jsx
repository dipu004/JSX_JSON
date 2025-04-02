import React from 'react';
import './Bottle.css'

const Bottle = ({bottle , handleAddToCart}) => {
     console.log(bottle)
    const {img , name , price , stock,shipping} = bottle
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Available: ${stock} remaining</p>
            <p>Shipping: ${shipping}</p>
            <button className='button-64' onClick={() =>{
                handleAddToCart(bottle)
            }}>Buy Now</button>
        </div>
    );
};

export default Bottle;