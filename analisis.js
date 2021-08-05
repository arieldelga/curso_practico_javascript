//Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

//Mediana general
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana = 0;

    if (esPar(lista.length)) {
        mediana = (lista[mitad] + lista[mitad - 1]) / 2;
    } else {
        mediana = lista[mitad];
    }
    return mediana;
}

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col
);