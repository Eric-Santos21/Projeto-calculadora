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