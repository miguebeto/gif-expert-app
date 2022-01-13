import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGift } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Inicializamos el estado con un array vacio
    // const [images, setImages] = useState([])

    //obtenemos el resultado de la petición una unica vez al ser cargada la app
    // useEffect(()=>{
    //     getGift(category)
    //     .then(setImages);
    // }, [category])

            //     <div className='card-grid'>
            //         {/* Recorremos el arreglo que obtenemos como resultado extrayendo los valores y pasándolos como props del componente  */}
            //         {images.map((img)=> (
            //             <GifGridItem 
            //                 key={img.id} 
            //                 {...img} 
            //             />
            //         ))}
            // </div>
    
    //hacemos uso de la propiedad loading dentro del objeto par simular la carga de una pagina.
   const { loading } = useFetchGifs();
  
    return (
        <>
            {/* imprimimos en pantalla el nombre de la categoria */}
            <h3>{category}</h3>
            {/* Mostramos cargando cuando el valor de la propiedad loading es true y data cargada cuando pasa a false luego de ejecutarse el setTimeout  */}
            { loading ? 'Cargando...' : 'Data Cargada' }

        </>
    )
}
