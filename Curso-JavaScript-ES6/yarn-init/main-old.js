import {soma} from './funcoes';
console.log(soma(1,2));

const arr = [1, , 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

const teste = () => ({ objeto: 'Gdrson' });

//yarn add @babel/plugin-proposal-object-rest-spread


//REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rockdfdedtseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


