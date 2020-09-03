import React, { useState, useEffect } from 'react';
import CatagoriDetails from '../CatagoriDetails/CatagoriDetails';
import { useContext } from 'react';
import { CatagoryContext } from '../../App';

const allProducts = [
    {name: 'Lenevo',catagory:'laptop'},{name: 'Lenevo',catagory:'laptop'},{name: 'Lenevo',catagory:'laptop'},
    {name: 'Samsung',catagory:'mobile'},{name: 'Samsung',catagory:'mobile'},{name: 'Samsung',catagory:'mobile'},
    {name: 'Canon',catagory:'camera'},{name: 'Canon',catagory:'camera'},{name: 'Canon',catagory:'camera'}
]

const Catagories = () => {
    const [catagory] = useContext(CatagoryContext)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        console.log({catagory});
        console.log("Bangladesh");
        console.log(catagory);  // state 
        const matchProducts = allProducts.filter(pd => pd.catagory === catagory)
        setProducts(matchProducts)
    },[catagory])
    return (
        <div>
            <h2>Select your Catagory : {catagory}</h2>
            {
                products.map(pd =><CatagoriDetails product={pd}></CatagoriDetails>)
            }
        </div>
    );
};

export default Catagories;