

function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso');

    if (tipoIngresso.value == 'pista') {
       comprarPista(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarCadeiraSup(quantidade);
    } else {
        comprarCadeiraInf(quantidade);
    }
    
}
function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert('Quantidade indisponivel para tipo pista');

    } else {
        if (quantidade > 0 ){
            qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra Realizada com sucesso!');
        } else {
            alert('Escolha uma quantidade de Ingressos!!');
        }
    }
        
    
    

}
function comprarCadeiraSup(quantidade) {
    let qtdCadeiraSup = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdCadeiraSup) {
        alert('Quantidade indisponivel para tipo Cadeira Superior');

    } else {
        if (quantidade > 0){
            qtdCadeiraSup = qtdCadeiraSup - quantidade;
            document.getElementById('qtd-superior').textContent = qtdCadeiraSup;
            alert('Compra Realizada com sucesso!');
        } else {
            alert('Escolha uma quantidade de Ingressos!!');
        }
       
    }

}
function comprarCadeiraInf(quantidade) {
    let qtdCadeiraInf = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > qtdCadeiraInf) {
        alert( 'Quantidade Indisponivel para tipo de Cadeira Inferior');
    
    }else {
        if (quantidade > 0) {
            qtdCadeiraInf = qtdCadeiraInf - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdCadeiraInf
            alert('Compra Realizada com sucesso!');

        }else {
            alert('Escolha uma quantidade de Ingressos!!');
        }
        
    }
}