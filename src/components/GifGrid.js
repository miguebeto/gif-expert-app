import React, { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Inicializamos el estado con un array vacio
    const [images, setImages] = useState([])

    //obtenemos el resultado de la petición una unica vez al ser cargada la app
    useEffect(()=>{
        getGift(category)
        .then(setImages);
    }, [category])

    


    return (
        <>
            {/* imprimimos en pantalla el nombre de la categoria */}
            <h3>{category}</h3>
            <div className='card-grid'>
                    {/* Recorremos el arreglo que obtenemos como resultado extrayendo los valores y pasándolos como props del componente  */}
                    {images.map((img)=> (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))}
            </div>
        </>
    )
}
