import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';


const Header = () => {
    const [catagory, setCatagory] = useContext(CatagoryContext)

    return (
        <div>
            <h1>This is Header : {catagory}</h1>
            <button onClick={()=>setCatagory("laptop")}>Laptop</button>
            <button onClick={()=>setCatagory("mobile")}>Mobile</button>
            <button onClick={()=>setCatagory("camera")}>Camera</button>
        </div>
    );
};

export default Header;