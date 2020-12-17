//Desestructuración

const persona = {
  nombre: "Daniel",
  edad: 21,
  clave: "danielrf",
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Asignando nombre a nombre2
const { nombre: nombre2 } = persona;
console.log(nombre2);

const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const huseContex = ({ nombre, edad, rango = "Capitan", clave }) => {
  //   console.table(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.2343,
      lang: -12.3434,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lang },
} = huseContex(persona);

console.log(nombreClave, anios);
console.log(lat, lang);
