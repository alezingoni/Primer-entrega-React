import React, {useEffect, useState} from "react";
import itemDetail from "./itemDetail";

const prod = [
    {
        "id":1,
        "nombre":"producto 1",
        "precio":"1",
    }
]


export const itemDetailContainer = () =>{
    const {data, setData} = useState({});
    
    
    return(
          <h1>deatlle</h1>
    );
}

export default itemDetailContainer;