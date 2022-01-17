import React from "react";
import PropTypes from "prop-types";
export const GifGridItem = ({ title, url }) => {
  // console.log(title, url);

  return (
    <div className="card animate__animated animate__pulse">
      {/* desestructuramos las props para mostrar en pantalla la imagen mediante la url y el titulo de cada imagen  */}
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
