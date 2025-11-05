const { calcularTotalPedido } = require("./pedido");
const { calcularIGV } = require("./funcionGrupo3");

describe("Prueba de integración: calcularTotalPedido() + calcularIGV()", () => {
  test("Flujo completo: calcula el total del pedido y aplica IGV", () => {
    // Paso 1: Definir productos y descuento
    const productos = [
      { precio: 150, cantidad: 2 }, // subtotal = 300
      { precio: 200, cantidad: 1 }, // subtotal total = 500
    ];
    const descuento = 10; // 10%

    // Paso 2: Calcular total base
    const totalPedido = calcularTotalPedido(productos, descuento);
    expect(totalPedido).toBeCloseTo(450, 2); // 500 - 10% = 450

    // Paso 3: Aplicar IGV sobre el total
    const totalConIGV = calcularIGV(productos, descuento);
    expect(totalConIGV).toBeCloseTo(531, 2); // 450 * 1.18 = 531
  });

  test("Flujo con error: no hay productos en el pedido", () => {
    const productos = [];
    const descuento = 0;

    const totalPedido = calcularTotalPedido(productos, descuento);
    expect(totalPedido).toBe("Error: no hay productos en el pedido");

    const totalConIGV = calcularIGV(productos, descuento);
    expect(totalConIGV).toBe("Error: no hay productos en el pedido");
  });
});
