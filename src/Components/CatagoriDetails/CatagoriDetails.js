import React from 'react';
import { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CatagoriDetails = (props) => {
    const {name} = props.product
    const catagori = useContext(CatagoryContext);
    return (
        <div>
            <h6>This is Catagori Details </h6>
            <h3>Selected Product : {name}</h3>
        </div>
    );
};

export default CatagoriDetails;