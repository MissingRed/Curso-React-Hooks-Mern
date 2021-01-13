describe("Pruebas del archivo demo", () => {
  test("Debe ser true", () => {
    const isActive = true;

    if (isActive) {
      //   throw new error("Fallo en la operación");
      console.log("Hola Mundo");
    }
  });

  test("deben ser iguales los strings", () => {
    //Inicialización
    const mensaje = "Hola Mundo";

    //Estímulo
    const mensaje2 = `Hola Mundo`;

    expect(mensaje).toBe(mensaje2); //===
  });
});
