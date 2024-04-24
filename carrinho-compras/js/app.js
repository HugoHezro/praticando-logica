let totalGeral;
limpar();

function adicionar() {
    //recuperar valores nome do prod, quant e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    if (quantidade <= 0) {
        alert('Insira uma quantidade apropriada!!');
        return;
    }
    //calcular o preço, subtotal
    let preco = quantidade * valorUnitario;
    //add no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    // atualizar o valor total
    totalGeral = totalGeral  + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;



}
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';


}