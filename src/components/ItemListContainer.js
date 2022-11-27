import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./itemList";


const prod = [
  {
      "id":1,
      "nombre":"producto 1",
      "precio":"1",
  },
  {
      "id":2,
      "nombre":"producto 2",
      "precio":"2",
  },
  {
      "id":3,
      "nombre":"producto 3",
      "precio":"3",
  },
  {
      "id":4,
      "nombre":"producto 4",
      "precio":"4",
  },
  {
      "id":5,
      "nombre":"producto 5",
      "precio":"5",
  },
  {
      "id":6,
      "nombre":"producto 6",
      "precio":"6",
  },
  {
      "id":7,
      "nombre":"producto 7",
      "precio":"7",
  }
]

export const ItemListContainer = ({greetings})  => {

const {data, setData} = useState({});

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(prod);
        }, 3000);
    });
    
    getData.then(res => setData(res))

}, {})



const onAdd = (valor) => {
        console.log(valor)
}
    
    return (
      <body className="body">
        <div className="contenedorBody">
            <p className="parrafoBody">{greetings}</p>
        <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </div>
      </body>
    )
  }
  export default ItemListContainer;