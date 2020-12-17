const nombre = "Daniel";
const appellido = "Rodriguez";

//const nombreCompleto = nombre + ' ' + appellido;

const nombreCompleto = `${nombre} ${appellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);