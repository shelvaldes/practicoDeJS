const lista1 = [
    100,
    200,
    300,
    1999,
];

const mitadLista = parseInt(lista1.length / 2);
let mediana

//promedio
function calcularMediaAritmetica (lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // };
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista
};

//mediana
function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista-1];
    const elemento2 = lista1[mitadLista];
    const promedio1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio1y2;
}else{
    mediana = lista1[mitadLista];

}

console.log("miau")

