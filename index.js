// importando o express
const express = require('express');
const req = require('express/lib/request');
const app = express();

// definindo rota 1
app.get('/', (req,res) => {
    res.send('<h1>Rota Inicial!</h1>');
});

// definindo rota 2
app.get('/rota2', (req,res) => {
    res.send('<h1>Acessando a Rota 2!</h1>');
});

// definindo rota 3
app.get('/rota3', (req,res) => {
    res.send('<h1>Acessando a Rota 3!</h1>');
});

// iniciando servidor 
const port = 3000;
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});