const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "Cali",
    calle: 25,
    casa: 30,
  },
};

console.table(persona);

//Objeto con propieda persona y asignando valor persona
console.table({ persona });
console.table({ daniel: persona });

//creando un nuevo objeto de persona
const persona2 = { ...persona }; //clonar objeto
persona2.nombre = "Daniel";

console.table(persona2);
