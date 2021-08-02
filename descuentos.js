var cupones = [
    {nombre : "cupon1", valor : 6},
    {nombre : "cupon2", valor : 20},
    {nombre : "cupon3", valor : 13}
]


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function cuponExiste(cupon) {
    let existe = false;
    // cupones.forEach(function(cup) {
    //     if (cupon == cup.name) {
    //         existe = true;
    //     }
    // });
    existe = cupones.some(function(cup) {
        return cup.nombre == cupon;
    });
    return existe;
}
function seleccionarCupon(cupon) {
    let cuponBuscado;
    let valorDescuento = 0;
    cuponBuscado = cupones.find(function(cup) {
        return cup.nombre == cupon;
    });
    valorDescuento = cuponBuscado.valor;
    return valorDescuento;
}
// function aplicarCupon(precio, cupon) {
//     let precioConCupon = 0;
//     const descuentoCupon = 0;
//     if (cuponExiste(cupon)) {
//         descuentoCupon = seleccionarCupon(cupon);
//         precioConCupon = calcularPrecioConDescuento(precio, descuentoCupon);
//     }
//     return precioConCupon;
// }

function calcularDescuentoButton() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCupon = document.getElementById("InputCupon");
    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;
    const valueCupon = inputCupon.value;
    let valueDiscountTotal = valueDiscount;

    if (cuponExiste(valueCupon)){
        valueDiscountTotal = Number(valueDiscount) + Number(seleccionarCupon(valueCupon));
    }

    let precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscountTotal);

    const resutltP = document.getElementById("ResultP");
    resutltP.innerText = "El precio con descuento son: $" + precioConDescuento;
}