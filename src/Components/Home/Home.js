import React, { useContext } from 'react';
import Catagories from '../Catagories/Catagories';
import { CatagoryContext } from '../../App';

const Home = (props) => {
    const [catagory,setCatagory] = useContext(CatagoryContext)
    return (        
        <div style={{border: '1px solid purple'}}>
            <h1>This is Home : {catagory}</h1>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;