// En un sistema de tienda se aplican descuentos a distintos productos.
// El sistema actualmente tiene el siguiente código:

function calcularPrecioLaptop(precio) {
  const descuento = precio * 0.1;
  const total = precio - descuento;
  console.log("El precio final es: " + total);
}

function calcularPrecioTelefono(precio) {
  const descuento = precio * 0.1;
  const total = precio - descuento;
  console.log("El precio final es: " + total);
}

function calcularPrecioTablet(precio) {
  const descuento = precio * 0.1;
  const total = precio - descuento;
  console.log("El precio final es: " + total);
}

calcularPrecioLaptop(1000);
calcularPrecioTelefono(500);
calcularPrecioTablet(300);
