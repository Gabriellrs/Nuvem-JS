let vetor = ['anão', 'elfo', 'tiefling'];

// Add um item no fim

vetor.push("humano");

// Add no começo

vetor.unshift("draconato");

// Remover do fim

vetor.pop();

// Remover do começo

vetor.shift();

// Pegar somente alguns elementos do array

//console.log(vetor.slice(1,3));

// Remover 1 ou mais itens em qualquer posição do array

//console.log(vetor.slice(1,2));

// Encontrar a posição de um elemento array

let index = vetor.indexOf('elfo');

// Remover o elemento de acordo com o index 

vetor.splice(index, 1);

console.log(vetor);