/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas;
1 - Preço do etanol;
2 - Preço do da gasolina;
3 - O tipo de combustível que está;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM por viagem;
Imprima no console o valor que será gasto em R$ para realizar esta viagem. */


function calcularValor() {

    // Isso verifica se o  usuário informou todos os campos.
    var tipoCombustivel = document.querySelector('input[name="tipoCombustivel"]:checked');
    var consumoCarro = parseFloat(document.getElementById("consumoCarro").value);
    var precoCombustivel = parseFloat(document.getElementById("precoCombustivel").value);
    var distancia = parseFloat(document.getElementById("distancia").value);

    //Verifica se os campos anteriores forem preenchidos.
    if (tipoCombustivel && consumoCarro && precoCombustivel && distancia) {
        var consumo = consumoCarro;
        var valorTotal = (distancia / consumo) * precoCombustivel;

        // Essa parte é para exibir o resultado na página
        document.getElementById('resultado').innerText = "O valor aproximado gasto com combustível : R$ " + valorTotal.toFixed(2);
    } else {
        // Caso o usuário esqueceu alguma informação será informado com essa msg
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos.'
    }
}