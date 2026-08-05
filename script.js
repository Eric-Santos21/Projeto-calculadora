const visor = document.getElementById('visor');
let valorAtual = '';
let valorAnterior = '';
let operacao = undefined;

function adicionarNumero(numero) {
    valorAtual = valorAtual.toString() + numero.toString();
    visor.value = valorAtual;
}

function escolherOperacao(op) {
    if (valorAtual === '') return;
    operacao = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function calcular() {
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    if (isNaN(anterior) || isNaN(atual)) return;
    
    if (operacao === '+') resultado = anterior + atual;
    if (operacao === '-') resultado = anterior - atual;
    if (operacao === '*') resultado = anterior * atual;
    if (operacao === '/') resultado = anterior / atual;
    
    valorAtual = resultado;
    operacao = undefined;
    valorAnterior = '';
    visor.value = resultado;
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operacao = undefined;
    visor.value = '';
}