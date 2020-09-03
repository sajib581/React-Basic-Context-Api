import React from 'react';
import { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {
    const [catagory, setCatagory] = useContext(CatagoryContext)
    return (
        <div>
            <h1>This is Shipment : {catagory}</h1>
            <button onClick={()=>setCatagory(catagory+1)}>Click from Shipment</button>
        </div>
    );
};

export default Shipment;