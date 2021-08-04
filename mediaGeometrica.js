const lista1 = [
    20,
    10,
    15,
    32,
    24,
    16,
    25,
];

function calcularMediaGeometrica(lista) {
    let mediaGeometrica = 1;
    const root = 1 / lista.length;
    for (let i = 0 ; i < lista.length ; i++) {
       mediaGeometrica = mediaGeometrica * lista[i]; 
    }
    mediaGeometrica = Math.pow(mediaGeometrica, root);
    return mediaGeometrica;
}