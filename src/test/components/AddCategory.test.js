import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en el componente <addCategory />", () => {
  //Simula el comportamiento de la funcion seteadora
  const setCategories = jest.fn();

  //Agregamos el prop requerido obligatoriamente en el componente como lo exige el propTypes del componente
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    //Comprueba que no existe cambios en el renderizado del componente como estaba originalmente
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar la caja de texto", () => {
    //guardamos en la variable el valor del input
    const input = wrapper.find("input");

    //creamos el valor que va ser agregado en el input
    const value = "Hola mundo";

    //hace la simulacion del inputChange con el valor ahora de value "hola mundo"
    input.simulate("change", { target: { value } });

    //comprueba que el valor del parrafo correspondiente al input value es igual al value proporcionado en test
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("no debe postear la informacion con submit", () => {
    //hace la simulacion del del evento onSubmit quedando el input value vacio ""
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //comprueba que cuando no se cambia el valor del input, no debe ser llamada la función setCategories
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    //creamos el valor que va ser agregado en el input
    const value = "Hola mundo";

    //hace la simulacion del inputChange con el valor ahora de value "hola mundo"
    wrapper.find("input").simulate("change", { target: { value } });

    //hace la simulacion del del evento onSubmit quedando el input value vacio ""
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //comprueba que el setCategories fué ejecutado una vez luego de ser llamado el handleSubmit
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    //comprueba que el setCategories fué ejecutado con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    //comprueba que el valor del input value fué seteado a un string vacio
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
