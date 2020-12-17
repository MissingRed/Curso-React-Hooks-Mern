//Funciones en JS

// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar());

//Funcion de flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Simplificacion de funcion flecha

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar2("Daniel"));
console.log(saludar3("Daniel3"));
console.log(saludar4("Daniel4"));

const getUser = () => {
  return {
    uid: "12345",
    username: "DanielRF",
  };
};

//Objeto implicito

const getUser2 = () => ({
  uid: "12345",
  username: "DanielRF",
});

console.log(getUser());
console.log(getUser2());

//Tarea
//1. Transformar a una funcion flecha
//2. Tiene que retornar un Objeto implicito
//3. Probar

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Daniel");
console.log(usuarioActivo);

//SOLUCIÓN

const getUsuarioActivo2 = (nombre) => ({
  uid: "FGH789",
  username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2("Andres");
console.log(usuarioActivo2);
