import React from "react";
//FC
const PrimeraApp = () => {
  const saludo = {
    nombre: "daniel",
    edad: 21,
  };
  return (
    <>
      <pre>{JSON.stringify(saludo)}</pre>
      <pre>{JSON.stringify(saludo, null, 3)}</pre>
      <p>Mi primera Aplicación</p>
    </>
  );
};

export default PrimeraApp;
