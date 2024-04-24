function calculadora(funcao) {
    let fun = funcao;
    let numero1 = parseFloat(prompt('Escolha o primeiro numero'));
    let numero2 = parseFloat(prompt('Escolha o segundo Numero'));
    if (fun == 'Divisao' || fun == 'divisao') {
       let resultado =  numero1 / numero2;
       alert(resultado);
    }else if (fun == 'multiplicacao') {
        let resultado = numero1 * numero2;
        alert(resultado);
    }else if (fun == 'soma') {
        let resultado = numero1 + numero2;
        alert(resultado);
    }else {
        let resultado = numero1 - numero2;
        alert(resultado);
    }
    

}
calculadora('divisao1');