const { calcularTotalPedido } = require("./pedido");

function calcularIGV(productos, descuento) {
  const total = calcularTotalPedido(productos, descuento);
  if (typeof total === "string") return total; // retorna el error si lo hay

  const totalConIGV = total * 1.18; // aplica IGV del 18%
  return parseFloat(totalConIGV.toFixed(2));
}

module.exports = { calcularIGV };
