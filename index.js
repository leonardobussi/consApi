const axios = require("axios")
const express = require("express")
const bp = require('body-parser');

const conexao = require('./conexao')
require('./model');
const mongoose = require('mongoose');
const modelo =  mongoose.model('funcionario');


const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended: false}));

var dados

function getFunci() {
    return axios.get("http://localhost:3000/funcionarios/lista?pagina=1")
}

dados = getFunci()

dados.then(function(req) {
    var {result} = req.data
     result.forEach(response => {
        var jsonDados = {
            'matricula': response.matricula,
            'nome': response.nome,
            'id_turma': response.id_turma,
            'data_admissao': response.data_admissao,
            'ROW_NUM': response.ROW_NUM
        }
        console.log(jsonDados)
        new  modelo(jsonDados).save();
     });

}).catch(function(error) {
    if(error){
        console.log(error)
    }
})



var port = process.env.PORT || 3001

app.listen(port, (err) => {
    conexao.connect()
    if(err) {
        console.log('falha na aplicação');
    } else {
        console.log(`aplicação funcionando [localhost:${port}]`);
    }
});