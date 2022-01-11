import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //Se usan arreglos de esta manera solamente cuando do vamos hacer cambios mediante eventos, nunca debe mutarse
    // const categories = ['One punch', 'Samuray x', 'Dragon ball'];

    //usamos useState cuando la colección será mutada o cambiada luego de cargado el componente
    const [categories, setcategories] = useState(['Evangelion']);

    // const handleAdd = ()=> {
    //     //formas de agregar elementos al arreglo en react
    //     // setcategories(categories.concat('HunterxHunter'));
    //     // setcategories([ 'HunterxHunter', ...categories]);
    //     setcategories(categories=> [...categories, 'HunterxHunter']);
        
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Mandamos la referencia de la funcion seteadora via props */}
            <AddCategory setcategories={setcategories} />
            <hr/>
            <ol>
                {/* recorremos el arreglo y lo pasamos como props al componente  */}
                {categories.map((category)=>(
                <GifGrid 
                    key={category}
                    category={category}
                    />))}
            </ol>
        </> 
    )
} 
