import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    //comprueba que el componente se encuentre sin modificaciones en el renderizado
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    //agregamos una variable con el valor del parrafo que se muestra en el componente
    const p = wrapper.find("p");

    //comprueba el texto del parrafo es igual a la variable titulo
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    //agregamos una variable con el valor de la imagen
    const img = wrapper.find("img");

    // console.log( img.prop('src') )

    //comprueba que las propiedades src y alt sean igual a las variables creadas
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener animate__pulse", () => {
    //creamos variables para referencias los valos del div y el valor del className
    const div = wrapper.find("div");
    const className = div.prop("className");

    //comprueba que la propiedad className del div tenga incluido el texto animate__pulse
    expect(className.includes("animate__pulse")).toBe(true);
  });
});
