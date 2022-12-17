// Uma função que é passada para outra função como um parâmetro é uma função de callback

function exibir(num){
    console.log("A operação resultou em: "+ num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function mult(a, b, callback){
    var op = a * b;
    callback(op);
}

soma(2, 2, exibir);

mult(2, 4, exibir);