import React, { use } from 'react';
import Bottle from './bottle/bottle';
const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
     console.log(bottles)
    return (
        <div>
            <h3>Bottles : {Bottles.length}</h3>
            {
                bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;