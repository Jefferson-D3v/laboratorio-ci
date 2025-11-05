const { calcularTotalPedido } = require("./pedido");
const { calcularImpuesto } = require("./calcularImpuesto");

test("Integra calcularTotalPedido con calcularImpuesto", () => {
  const productos = [
    { precio: 100, cantidad: 2 },
    { precio: 50, cantidad: 1 },
  ];
  const descuento = 10; // 10%
  const totalPedido = calcularTotalPedido(productos, descuento); // subtotal=250 -> total=225
  const totalConImpuesto = calcularImpuesto(totalPedido, 18); // 225 + 18% = 265.5
  expect(totalConImpuesto).toBeCloseTo(265.5);
});
