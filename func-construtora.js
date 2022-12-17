// Servem de molde para a criação de objetos

function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const tesla = new Carro('Tesla', 'x', 2018);

function printCarro(carro){
    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.ano);
}

printCarro(tesla);