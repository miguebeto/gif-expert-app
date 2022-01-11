import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Inicializamos el estado con un array vacio
    const [images, setImages] = useState([])

    //obtenemos el resultado de la petición una unica vez al ser cargada la app
    useEffect(()=>{
        getGift();

    },[])

    //hacemos la peticion de manera async indicando que debe esperar las respuesta mediante await
    const getGift = async()=> {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Evangelion&limit=10&api_key=bu4fgAKUjH0gKucz79CR1tV0GWDusAn8';
        const resp = await fetch(url);
        const {data} = await resp.json();

        //convertimos la respuesta en un objeto reducido con solo los datos que necesitamos
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //imprimimos en consola el resultado y lo guardamos en estado local
        // console.log(gifs);
        setImages(gifs);
    }   


    return (
        <div>
            {/* imprimimos en pantalla el nombre de la categoria */}
            <h3>{category}</h3>
                {/* Recorremos el arreglo que obtenemos como resultado extrayendo los valores y pasándolos como props del componente  */}
                {images.map((img)=> (
                    <GifGridItem 
                        key={img.id} 
                        {...img} 
                    />
                ))}
        </div>
    )
}
