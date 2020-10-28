const axios = require("axios")
const express = require("express")
const bp = require('body-parser');

const conexao = require('./conexao')
require('./model');
const mongoose = require('mongoose');
const modelo =  mongoose.model('matri');


const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended: false}));

var dados

function getFunci() {
    return axios.get("http://localhost:3000/usuario")
}

dados = getFunci()

dados.then(function(req) {
    var {result} = req.data
     result.forEach(response => {
        var jsonDados = {"rg": response.rg}
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