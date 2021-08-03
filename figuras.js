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
