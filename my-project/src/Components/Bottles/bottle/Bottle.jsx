import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
     console.log(bottle)
    const {img , name , price , stock} = bottle
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Available: ${stock} remaining</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Bottle;