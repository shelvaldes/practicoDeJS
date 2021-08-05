//let ladoCuadrado
//let ladoTriangulo1
//let ladoTriangulo2
//let alturaTriangulo
//let baseTriangulo 
//let radioCirculo
const PI = Math.PI

//cuadrado
function perimetroCuadrado (lado) {
    return lado*4;
};
 function areaCuadrado (lado){
     return lado*lado;
 };

 //triangulo
 function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
 };
 function areaTriangulo(base, altura){
     return (base*altura)/2;
 };

 //círculo
 function perimetroCirculo(radio){
    
     const diametroCirculo = (radio) => radio*2;
     return PI * diametroCirculo(radio);
 };

 function areaCirculo(radio){
     return PI * (radio*radio)
 };

 function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
 }

 function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value1 = parseFloat(input1.value)
    const value2 = parseFloat(input2.value)
    const base = parseFloat(inputBase.value)
    const perimetro = perimetroTriangulo(value1, value2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const inputBase = document.getElementById("InputTrianguloBase");
    const altura = parseFloat(inputAltura.value);
    const base = parseFloat(inputBase.value);
    const area = areaTriangulo(base, altura);
    alert(area);
}