import React, { use, useEffect, useState } from 'react';
import Bottle from './bottle/bottle';
import './Bottles.css'
import { addToStoreCart, getSotreCart } from '../../Utilities/LocalStorage';
const Bottles = ({bottlesPromise}) => {

   const [cart , setCart] = useState([]);

   const bottles = use(bottlesPromise)


//    useEffect
      useEffect(() =>{
        const storedCartIds = getSotreCart();
        //  console.log(storedCartIds, bottles);
         const storedCart = [];
        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
             storedCart.push(cartBottle);
            }
        }
        console.log('stored cart', storedCart)
        setCart(storedCart)
      },[bottles])

   const handleAddToCart = (bottle) => {
        //  console.log('bottle will be added to the cart',bottles)
        const newCart = [...cart , bottle]
        setCart(newCart)
        // Save The bottle id in the storage
        addToStoreCart(bottle.id)
   }

   
     
    return (
        <div>
            <h3>Bottles : {Bottles.length}</h3>
            <p>Added To Card: {cart.length}</p>
          
         <div className='bottles-container'>
           {
                bottles.map(bottle => <Bottle bottle={bottle}  key={bottle.id} handleAddToCart={handleAddToCart} ></Bottle>)
            }
         </div>
          
        </div>
    );
};

export default Bottles;