function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }else if (quantidade > (ate - de + 1)) {
        alert('Quantidade de número não pode ser superior as possibilidades de geração dos números!!');
        return;
    }
    

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
       
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');

    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
        botaoSortear.classList.remove('container__botao-desabilitado');

    }

}
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}