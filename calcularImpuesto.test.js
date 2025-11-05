const { calcularImpuesto } = require("./calcularImpuesto");

test("Calcula el impuesto correctamente", () => {
  expect(calcularImpuesto(100, 18)).toBe(118);
});

test("Debe mostrar error si los datos no son numéricos", () => {
  expect(calcularImpuesto("100", 18)).toBe("Error: datos inválidos");
});

test("Debe mostrar error si los valores son negativos", () => {
  expect(calcularImpuesto(-50, 10)).toBe("Error: valores negativos");
});
