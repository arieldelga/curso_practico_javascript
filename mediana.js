const lista1 = [
    1000,
    200,
    500,
    3,
    400,
    100,
    200,
    1,
    111,
    400,
    5,
    100000,
];

function esPar(num) {
    let par = false
    if ((num % 2) == 0) {
        par = true;
    }
    return par;
}
function ordenarListaConMetodo(lista) {
    let listaOrdenada = lista;
    lista.sort(function(prev, next) {
        return prev - next;
    });
    return listaOrdenada;
}
function ordenarLista(lista) {
    let listaOrdenada = lista;
    let auxNum = 0;
    let auxElementPrin = 0;
    let auxElementFin = 0;
    for (let i = lista.length - 1 ; i > 0 ; i--) {
        auxNum = i;
        if (lista[auxNum] < lista[auxNum-1]) {
            while(auxNum <= lista.length - 1) {
                if(lista[auxNum] < lista[auxNum-1]) {
                    auxElementPrin = lista[auxNum-1];
                    auxElementFin = lista[auxNum];
                    listaOrdenada[auxNum-1] = auxElementFin;
                    listaOrdenada[auxNum] = auxElementPrin;
                }
                auxNum = auxNum + 1;
            }
        }
    }
    return listaOrdenada;
}

function calcularMediana(lista) {
    let listaOrdenada = ordenarLista(lista);
    const mitadLista = parseInt(lista.length / 2);
    let mediana = 0;
    if (esPar(lista.length)) {
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}