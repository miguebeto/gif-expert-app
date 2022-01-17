import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hooks useFetchGifs", () => {
  test("debe retornar el estado inicial", async () => {
    //crea un componente virtual que permite hacer uso de custom hooks
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Evangelion")
    );
    //con la desestructuracion sacamos los valore data y loading que nos arroja por defecto el custom hooks
    const { data, loading } = result.current;

    //miramos por consolo los resultados
    console.log(data, loading);

    //espera por la siguiente actualización del estado
    await waitForNextUpdate();

    //Comprueba que el estado inicial de nuestro custom hooks sea el correcto
    expect(data).toEqual([]);
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("debe retornar un arreglo de imgs y el loading en false", async () => {
    //crea un componente virtual que permite hacer uso de custom hooks
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Evangelion")
    );

    //espera por la siguiente actualización del estado
    await waitForNextUpdate();

    const { data, loading } = result.current;

    //miramos por consolo los resultados
    console.log(data, loading);

    //Comprueba que el estado de nuestro custom hooks sea el correcto luego de pasar la categoria
    expect(data.length).toBe(8);
    expect(loading).toBe(false);
  });
});
