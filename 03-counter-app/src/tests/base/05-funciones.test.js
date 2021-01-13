import "@testing-library/jest-dom";
import { getUser } from "../../base/05-funciones";
import { getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas de 05-funciones", () => {
  test("getUser debe retornar un objeto ", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //getUsuarioActivo debe de retornar un objeto

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Daniel";

    const usuarioActivo = {
      uid: "ABC567",
      username: nombre,
    };

    const usuario = getUsuarioActivo(nombre);
    expect(usuario).toEqual(usuarioActivo);
  });
});
