//EX.1
//criar um programa que cumprimente o usuário pelo nome.
//Crie uma função cumprimentar(nome) que recebe um nome (string) como parâmetro e retorna a string "Olá, [nome]!"

function nome () {
    let nome= prompt("Olá qual o seu nome?")
    alert('Olá ' + nome);
}


//EX.2
//Seu amigo nasceu em um ano específico e você quer calcular a idade dele rapidamente.
//Crie uma função calcularIdade(anoNascimento, anoAtual) que recebe o ano de nascimento e o ano atual, e retorna a idade (resultado da subtração).


// Função que calcula a idade com base na data de nascimento
function calculaIdade(dataNascimento) {
    const hoje = new Date(); // Pega a data atual
    const nascimento = new Date(dataNascimento); // Converte a string de entrada em objeto Date

    let idade = hoje.getFullYear() - nascimento.getFullYear(); // Calcula diferença de anos

    const mesAtual = hoje.getMonth(); // Mês atual (0 a 11)
    const mesNascimento = nascimento.getMonth(); // Mês de nascimento

    // Verifica se ainda não fez aniversário neste ano
    if (
        mesAtual < mesNascimento || 
        (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())
    ) {
        idade--; // Se ainda não fez aniversário, subtrai 1 da idade
    }

    return idade; // Retorna a idade calculada
}

// Função chamada ao clicar no botão
function mostrarIdade() {
    const input = document.getElementById('dataNascimento').value; // Pega o valor do input


    const idade = calculaIdade(input); // Chama a função que calcula a idade
    document.getElementById('resultado').textContent = `Sua idade é: ${idade} anos.`; // Mostra o resultado na tela
}



//EX.3
//Você está comprando dois itens e quer saber o custo total.
// Crie uma função precoTotal(precoItem1, precoItem2) que recebe os preços de dois itens e retorna a soma deles.


 // Função que soma os preços de dois itens
 function precoTotal(precoItem1, precoItem2) {
    return precoItem1 + precoItem2;
}

// Função que pega os valores dos inputs e exibe o total
function mostrarPrecoTotal() {
    // Pega os valores dos inputs e converte para números flutuantes
    const item1 = parseFloat(document.getElementById('item1').value);
    const item2 = parseFloat(document.getElementById('item2').value);

    // Verifica se os valores são válidos
    if (isNaN(item1) || isNaN(item2)) {
        // Exibe mensagem de erro se algum valor não for válido
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para ambos os itens.';
        return;
    }

    // Calcula o total usando a função precoTotal
    const total = precoTotal(item1, item2);

    // Exibe o total, formatando com duas casas decimais
    document.getElementById('resultado').textContent = `Preço total da compra: R$ ${total.toFixed(2)}`;
}




//EX.4
//Situação Problema: Você pagou uma conta com um valor maior e precisa saber quanto receberá de troco.
//Crie uma função calcularTroco(valorPago, valorTotal) que recebe quanto você pagou e o valor total da conta, e retorna o troco (diferença).

// Função que calcula o troco
function calcularTroco(valorPago, valorTotal) {
    return valorPago - valorTotal; // Retorna a diferença entre o valor pago e o valor total
}

// Função chamada ao clicar no botão
function mostrarTroco() {
    // Pega os valores dos inputs e converte para números flutuantes
    const valorPago = parseFloat(document.getElementById('valorPago').value);
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);

    // Verifica se os valores são válidos
    if (isNaN(valorPago) || isNaN(valorTotal)) {
        // Se algum valor for inválido, exibe mensagem de erro
        document.getElementById('resultado').textContent = 'Por favor, insira valores.';
        return;
    }

    // Verifica se o valor pago é menor que o valor total
    if (valorPago < valorTotal) {
        document.getElementById('resultado').textContent = 'O valor pago não pode ser menor que o valor total.';
        return;
    }

    // Calcula o troco usando a função calcularTroco
    const troco = calcularTroco(valorPago, valorTotal);

    // Exibe o troco formatado com duas casas decimais
    document.getElementById('resultado').textContent = `Troco a ser devolvido: R$ ${troco.toFixed(2)}`;
}


//EX.5
//Situação Problema: Em um jogo, você coletou uma quantidade de moedas e cada moeda vale 3 pontos.
//Crie uma função pontuacaoTotal(quantidadeMoedas) que recebe a quantidade de moedas e retorna a pontuação total (quantidade * 3)

        // Função que calcula a pontuação total (quantidade de moedas * 3)
        function pontuacaoTotal(quantidadeMoedas) {
            return quantidadeMoedas * 3; // Cada moeda vale 3 pontos
        }

        // Função chamada ao clicar no botão
        function mostrarPontuacao() {
            // Pega o valor da quantidade de moedas e converte para número
            const quantidadeMoedas = parseInt(document.getElementById('quantidadeMoedas').value);

            // Verifica se o valor é válido
            if (isNaN(quantidadeMoedas) || quantidadeMoedas < 0) {
                // Se não for um número válido, exibe mensagem de erro
                document.getElementById('resultado').textContent = 'Por favor, insira um número válido de moedas.';
                return;
            }

            // Calcula a pontuação usando a função pontuacaoTotal
            const pontuacao = pontuacaoTotal(quantidadeMoedas);

            // Exibe a pontuação total
            document.getElementById('resultado').textContent = `Sua pontuação total é: ${pontuacao} pontos.`;
        }



        //EX.6
        //Situação Problema: Você e um amigo dividiram o custo de um jantar igualmente.
        //Crie uma função dividirConta(valorTotalJantar) que recebe o valor total e retorna quanto cada um deve pagar (valor total / 2).

       
                // Função que divide o valor do jantar igualmente por 2
                function dividirConta(valorTotalJantar) {
                    return valorTotalJantar / 2;
                }
        
                // Função chamada ao clicar no botão
                function mostrarValorDividido() {
                    const valor = parseFloat(document.getElementById('valorJantar').value);
        
                    // Verifica se o valor é válido
                    if (isNaN(valor) || valor <= 0) {
                        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido maior que zero.';
                        return;
                    }
        
                    const valorDividido = dividirConta(valor);
        
                    // Exibe o valor dividido com duas casas decimais
                    document.getElementById('resultado').textContent = `Cada pessoa deve pagar: R$ ${valorDividido.toFixed(2)}`;
                }
            


            //EX.6

        