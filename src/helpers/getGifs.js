//hacemos la peticion de manera async indicando que debe esperar las respuesta mediante await
export const getGifs = async(category)=> {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=8&api_key=bu4fgAKUjH0gKucz79CR1tV0GWDusAn8`;
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

    //retornamos el resultado 
    return gifs;
}   