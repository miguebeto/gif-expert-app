import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(id, title, url);

    return (
        <div className='card'>
            {/* desestructuramos las props para mostrar en pantalla la imagen mediante la url y el titulo de cada imagen  */}
            <img src={url} alt='Img no found' />
            <p>{title}</p>
        </div>
    )
}
