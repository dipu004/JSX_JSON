import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle)
    return (
        <div>
            <img src={bottle.img} alt="" />
        </div>
    );
};

export default Bottle;