import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas de desestructuración", () => {
  test("debe de retornar un string y un numero", () => {
    const arr = retornaArreglo(); //["ABC", 123]
    const [letras, numeros] = retornaArreglo();

    expect(arr).toEqual(["ABC", 123]);
    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);

    /////////////////////////////

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
