import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //hacemos uso de la propiedad loading dentro del objeto par simular la carga de una pagina.
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {/* imprimimos en pantalla el nombre de la categoria */}
      <h3>{category}</h3>
      {/* Mostramos cargando cuando el valor de la propiedad loading es true y data cargada cuando pasa a false luego de ejecutarse el setTimeout  */}
      {loading && (
        <p className={"animate__animated animate__flash"}>loading...</p>
      )}
      <div className="card-grid">
        {/* Recorremos el arreglo que obtenemos como resultado extrayendo los valores y pasándolos como props del componente  */}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
