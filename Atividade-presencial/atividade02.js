"use strict";
function printDecimal(valor) {
    let deci = (valor).toString(10);
    return deci;
}
function printHexadecimal(valor) {
    let hexa = (valor).toString(16);
    return hexa;
}
function printOctal(valor) {
    let octal = (valor).toString(8);
    return octal;
}
function printBinario(valor) {
    let bin = (valor).toString(2);
    return bin;
}
function imprimirTabela() {
    console.log('Decimal Octal Hexadecimal  Binario');
    console.log('--------- ------ ----------- -------');
    for (let n = 0; n <= 225; n++) {
        console.log(`${printDecimal(n)}  ${printOctal(n)}   ${printHexadecimal(n)}   ${printBinario(n)}`);
    }
}
imprimirTabela();
