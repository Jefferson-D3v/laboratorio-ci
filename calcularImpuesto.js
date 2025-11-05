function calcularImpuesto(total, tasa) {
  if (typeof total !== "number" || typeof tasa !== "number")
    return "Error: datos inválidos";
  if (total < 0 || tasa < 0) return "Error: valores negativos";
  return total + (total * tasa) / 100;
}

module.exports = { calcularImpuesto };
