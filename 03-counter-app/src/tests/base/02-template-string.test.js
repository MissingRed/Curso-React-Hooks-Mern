import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en el fichero: 02-template-string", () => {
  test("getSaludo debe retornar Hola Daniel ", () => {
    const nombre = "Daniel";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
  //getSaludo debe retornar Hola Carlos, si no hay argumento nombre
  test("getSaludo debe retornar Hola Carlos ", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
