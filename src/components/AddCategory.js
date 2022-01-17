import React, { useState } from "react";
import PropsTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //permite setear o cambiar el value por defecto por el valor ingresado desde el dom en el input cunado ocurra el evento
  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log("handleInputChange llamado");
  };

  const handleSubmit = (e) => {
    //previene que se actualice la página al ocurrir el evento por defecto
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      //agrega los datos del input como nuevo elemento del arreglo
      setCategories((categories) => [inputValue, ...categories]);
      //vaciamos el inout luego de agregal el valor al arreglo
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p> {inputValue} </p>{" "}
      <input type="text" value={inputValue} onChange={handleInputChange} />{" "}
    </form>
  );
};

//Se utiliza el propTypes and PropsTypes para indicar que el props debe ser obligatorio en el componenete
AddCategory.propTypes = {
  setCategories: PropsTypes.func.isRequired,
};
