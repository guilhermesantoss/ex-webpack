// const Pessoa = require('./pessoa');
import Pessoa from './pessoa';
import './assets'; // com essa declaracao, a aplicacao vai procurar dentro da pasta um arquivo padrao index.js

const atendente = new Pessoa;
console.log(atendente.cumprimentar());