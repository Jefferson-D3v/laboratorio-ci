const { calcularIGV } = require("./funcionGrupo3");

describe("Pruebas unitarias para calcularIGV()", () => {
  test("Caso de éxito: Calcula correctamente el total con IGV", () => {
    const productos = [
      { precio: 100, cantidad: 2 }, // subtotal = 200
    ];
    const descuento = 0;
    const resultado = calcularIGV(productos, descuento);
    expect(resultado).toBeCloseTo(236, 2); // 200 * 1.18 = 236
  });

  test("Caso de error: No hay productos en el pedido", () => {
    const productos = [];
    const descuento = 0;
    const resultado = calcularIGV(productos, descuento);
    expect(resultado).toBe("Error: no hay productos en el pedido");
  });
});
