//Se genera componente con  ----rafcp--- //snippet

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleAdd2 = () => {
    return () => console.log("Hola Mundo");
  };

  return (
    <>
      <h1>CounterApp</h1>
      {<h2>{counter}</h2>}

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>

      <hr />
      <button onClick={handleAdd2()}>Hola Mundo</button>
    </>
  );
};

//Se generan validaciones con PropType para el que valor enviado por parametro a este componente sea de un tipo de dato en especifico, en este caso un entero positivo
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
export default CounterApp;
