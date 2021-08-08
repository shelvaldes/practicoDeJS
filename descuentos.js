const precioOriginal = 440;
const descuento = 30;

function calcularPrecioFinal(precio, desc){
    const porcentajePrecioConDescuento = 100 - desc;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDesc");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioFinal(priceValue, discountValue);
    const printPrice = document.getElementById("printPrice");
    printPrice.innerText = `$ ${precioConDescuento}`;
}

// calcularPrecioFinal(400, 30)