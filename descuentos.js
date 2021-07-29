// const preciOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (preciOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     preciOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
