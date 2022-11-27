import Item from './item';
import React from "react";

const itemList = ({data = []}) => {
    return(
        data.map(prod => <Item key={prod.id} info={prod}/>)
    );
}

export default itemList;


