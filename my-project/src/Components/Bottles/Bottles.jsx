import React, { use } from 'react';
import Bottle from './bottle/bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
     console.log(bottles)
    return (
        <div>
            <h3>Bottles : {Bottles.length}</h3>
          
         <div className='bottles-container'>
           {
                bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
            }
         </div>
          
        </div>
    );
};

export default Bottles;