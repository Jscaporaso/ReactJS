import ItemList from '../ItemList';
import jsonpack from '../data.json';
import React, {useState} from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({name}) => {
    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
    })
    return (
        <div className="contenedor" name="test">
            <div className="listas p-3 mb-2 text-white">{name}
                <ItemList items={item}/>
            </div>
        </div>
   )
}
export default ItemListContainer;


