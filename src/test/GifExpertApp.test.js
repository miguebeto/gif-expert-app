import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
  test("debe retorna el componente en su forma original", () => {
    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    //creamos una variable con el areglo de las categorias que se van a pasar en las props del componente y en el initialstate
    const categories = ["Evangelion", "Naruto"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    expect(wrapper).toMatchSnapshot();

    //comprueba que el componente está renderizando el componente <GifGrid /> por cada elemento del arreglo
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
