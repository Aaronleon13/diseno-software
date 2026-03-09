// En un sistema de ventas necesitamos calcular el precio total de diferentes cosas:
// El total de una compra
// El total de un pedido
// El total de un producto
// En todos los casos debemos:
// Calcular un impuesto del 16%
// Sumarlo al precio original
// Obtener el total a pagar

// function calcularTotalCompra(precio) {
//   const impuesto = precio * 0.16;
//   return precio + impuesto;
// }

// function calcularTotalPedido(precio) {
//   const impuesto = precio * 0.16;
//   return precio + impuesto;
// }

// function calcularTotalProducto(precio) {
//   const impuesto = precio * 0.16;
//   return precio + impuesto;
// }

// console.log(calcularTotalCompra(50));
// console.log(calcularTotalPedido(1000));
// console.log(calcularTotalProducto(10000));

const IVA = 0.16;
const CUOTA = 5;

function calcularImpuesto(precio) {
  return precio * IVA + CUOTA;
}

function calcularTotal(precio) {
  const total = precio + calcularImpuesto(precio);
  return total;
}

console.log(calcularTotal(50));
