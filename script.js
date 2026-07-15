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