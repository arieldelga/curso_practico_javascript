//Codigo cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Codigo triangulo
console.group("Triangulo");

function esIsoceles(lado1, lado2, lado3) {
    let isoceles = false;
    if (lado1 == lado2) {
        isoceles = true;
    } else if (lado2 == lado3) {
        isoceles = true;
    } else if (lado1 == lado3) {
        isoceles = true;
    }
    return isoceles;
}

function getBase(lado1, lado2, lado3) {
    let base = 0;
    if (lado1 == lado2) {
        base = lado3;
    } else if (lado2 == lado3){
        base = lado1;
    } else {
        base = lado2;
    }
    return base;
}

function alturaTrianguloIsoceles(lado1, lado2, lado3) {
    let altura = 0;
    let base = getBase(lado1, lado2, lado3);
    let catetoAd = base / 2;
    let hipotenusa = lado3;

    if (base != lado1) {
        hipotenusa = lado1;
    } else if (base != lado2){
        hipotenusa = lado2;
    }

    if (esIsoceles(lado1, lado2, lado3)) {
        altura = Math.sqrt((hipotenusa * hipotenusa) - (catetoAd * catetoAd));
    } else {
        console.log("No es isoceles")
    }
    return altura;
}

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo circulo
console.group("Circulo");

//diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//pi
const pi = Math.PI;
console.log("PI es: " + pi + "cm");

//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//area
function areaCirculo(radio) {
    return pi * (radio * radio);
}
console.groupEnd();

// Aqui interactuamos con el HTML

//  CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// TRIANGULO
function calularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");

    const value1 = input1.value;
    const value2 = input2.value;
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");

    const value1 = input1.value;
    const value2 = input2.value;
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
function calcularAlturaIsoceles() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");

    const value1 = input1.value;
    const value2 = input2.value;
    const valueBase = inputBase.value;

    const altura = alturaTrianguloIsoceles(value1, value2, valueBase);
    alert(altura);
}

// CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}