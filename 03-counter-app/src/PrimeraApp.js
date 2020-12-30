import React from "react";
import PropTypes from "prop-types";
//FC
const PrimeraApp = ({ saludo, subtitulo }) => {
  const saludo1 = {
    nombre: "daniel",
    edad: 21,
  };
  return (
    <>
      <h1>{saludo}</h1>
      <hr />
      <pre>{JSON.stringify(saludo1)}</pre>
      <pre>{JSON.stringify(saludo1, null, 3)}</pre>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
