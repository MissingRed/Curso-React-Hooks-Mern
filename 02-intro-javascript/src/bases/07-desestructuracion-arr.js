const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
console.log("--------------------");

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//TAREA

//1. El primer valor del arr1 se llamara nombre
//2. Se llamara setNombre

const huseState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const arr1 = huseState("Goku");
console.log(arr1);

arr1[1]();

const [nombre, setNombre] = huseState("goku");

console.log(nombre);
setNombre();
