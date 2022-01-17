import { getGifs } from "../../helpers/getGifs";

describe("pruebas con getGifs fetch", () => {
  test("debe de traer 10 elementos", async () => {
    //simulamos la peticion para categoria especificada
    const gifs = await getGifs("Evangelion");

    // console.log(gifs.length);

    //comprueba que la peticion asincrona devuelva un arreglo de 8 elementos
    expect(gifs.length).toBe(8);
  });

  test("debe de ser 0 cuando se mande un string vacio", async () => {
    //simulamos una peticion con un valor vacio
    const gifs = await getGifs("");

    // console.log(gifs);

    //comprueba que la peticion asincrona devuelva un arreglo de 0 elementos cuando no se pasa una categoria
    expect(gifs.length).toBe(0);
  });
});
