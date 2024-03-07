/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas;
1 - Preço do etanol;
2 - Preço do da gasolina;
3 - O tipo de combustível que está;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM por viagem;
Imprima no console o valor que será gasto em R$ para realizar esta viagem. */


let precoEtalnol = 2.10;
let precoGasolina = 5.09;
let kmPorLitros = 15;
let distanciaEmKm = 20000;
let tipoCombustivel = 'Etanol'; /* Para mudar o resultado no código, essa let pode ser alterada */

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
    /* Se na const tipoCombustivel tiver escrito exatamente ("===")'Etanol', irá multiplicar as consts litrosConsumidos * precoEtalnol ... */
    const valorGasto = litrosConsumidos * precoEtalnol;
    console.log(valorGasto.toFixed((2)))
} else {
    /* Se não tiver 'Etanol' dentro do let tipoCombustivel irá multiplicar as consts litrosConsumidos * precoGasolina */
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed((2)))
}
