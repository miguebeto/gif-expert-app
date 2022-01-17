import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";
//Simula el suo de la peticion fetch
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en el componente <GifGrid />", () => {
  const category = "Evangelion";

  test("debe retornar el componente sin cambios en el rendererizado", () => {
    //muestra lo que debe retornar al hacer cuando el fetch está vacio
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    //trae el componente <GifGrid /> con la props requerida obligatoriamente mediante el propTypes
    const wrapper = shallow(<GifGrid category={category} />);

    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imágenes useFetchGifs", () => {
    //creamos el objeto que va a simular la respuesta del fetch
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "cualquier cosa",
      },
    ];

    //simulamos el retorno del fetch con la informacion agregada anteriormente
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    const wrapper = shallow(<GifGrid category={category} />);

    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    // expect(wrapper).toMatchSnapshot();

    //comprueba que el loading no se encuentra renderizado como un parrafo
    expect(wrapper.find("p").exists()).toBe(false);

    //comprueba que el se pasó el componente <GifGridItem />
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
