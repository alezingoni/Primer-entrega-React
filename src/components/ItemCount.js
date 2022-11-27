import './App.css';
import  "./ItemListContainer";
import React,{useState, useEffect} from 'react';



export const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador,  setCount] = useState(parseInt(inicial));
    
    const decrease = () => {
        setCount(contador - 1)
    }

    const increase = () => {
        setCount(contador + 1)
    }
    useEffect(()  =>{
        setCount(parseInt(inicial));
    }, {inicial})


    return(
        <div className='contador'>
            <button disabled={contador <= 1} onClick={decrease}>-</button>
            <span>{contador}</span>
            <button disabled={contador >= stock} onClick={increase}>+</button>
            <div>
                <button disabled= {stock <= 0} onClick={() => onAdd(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;