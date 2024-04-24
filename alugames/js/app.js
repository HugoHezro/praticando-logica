let gamesAlugados = 0;

function contarJogos(){
    console.log(`Total de Jogos Alugados: ${gamesAlugados}`)
}

function alterarStatus(id) {
    let gameClicado = document.getElementById('game-'+id);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Tem certeza que queres devolver ${nomeJogo.textContent} ?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            gamesAlugados--
        }
        
    }else {
       imagem.classList.add('dashboard__item__img--rented');
       botao.classList.add('dashboard__item__button--return');
       botao.textContent = 'Devolver';
       gamesAlugados++
    }
    contarJogos();
}
document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogos();
});
