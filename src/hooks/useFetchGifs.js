import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//Usamos nuestro custom hook al igual que como usamos un componente funcional, agregamos el useState y retornamos lo que que será usado en otros componentes.
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

//no se puede usar async en los efectos porque son sicrónicos
    useEffect(()=>{

        //Ejecutamos la promesa para traer la información de la petición y guardarla en el estado
        getGifs( category )
        .then(imgs =>{
            //Se mostraran las imagenes luego de 3 segundos
            setTimeout(()=>{      
                setState({
                    data: imgs,
                    loading: false
                })
            },3000)
        })
    },[ category ])

    return state //{data:[], loading: true}
}
