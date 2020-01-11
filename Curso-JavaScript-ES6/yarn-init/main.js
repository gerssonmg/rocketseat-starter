const arr = [1, , 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

const teste = () => ({ objeto: 'Gdrson' });

//yarn add @babel/plugin-proposal-object-rest-spread


//REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rockedtseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


