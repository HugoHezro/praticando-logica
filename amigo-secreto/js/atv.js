// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
  return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
  { id: 1, nome: 'João', idade: 20 },
  { id: 2, nome: 'Maria', idade: 22 },
  { id: 3, nome: 'Pedro', idade: 21 },
  { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
  console.log('O aluno está presente no array.');
} else {
  console.log('O aluno não está presente no array.');
}

