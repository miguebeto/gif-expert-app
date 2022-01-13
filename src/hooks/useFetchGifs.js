import React, { useState } from 'react'

//Usamos nuestro custom hook al igual que como usamos un componente funcional, agregamos el useState y retornamos lo que que será usado en otros componentes.
export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    setTimeout(()=>{
        setState({
            data: [1,2,3,4,5],
            loading: false
        })
    },3000)


    return state //{data:[], loading: true}
}
