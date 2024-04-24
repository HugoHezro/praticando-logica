let amigos = []

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (amigos.includes(amigo.value)){
        alert('Pessoa já adicionada!!');
        return;
    }else if (amigo.value == '') {
        alert('Escreva o nome da pessoa!!')
        return;
    }else{
        amigos.push(amigo.value);
    }
       

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    }else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    atualizarLista();
    atualizarSorteio();

}
function sortear() {
    atualizarSorteio();
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    if (amigos.length >= 4) {
        for (let i = 0; i < amigos.length; i++){

            if (i == amigos.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>'
            } else{
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>'
            }

        }
    }else {
        alert('Número de Participantes deve conter no mínimo 4 pessoas!')
    }

}
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}



function embaralhar(lista){

    for (let i = lista.length; i; i--) {

        const indiceAleatorio = Math.floor(Math.random() * i);

        //atribuir via destructuring
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];


    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            if (confirm(`Deseja realmente excluir ${amigos[i]}`)){
                excluirAmigo(i);
            }
            
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}