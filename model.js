const mongoose = require('mongoose');

const funcionario = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    id_turma: {
        type: Number,
        required: true,
    },
    data_admissao: {
        type: String,
        required: false,
        trim: true,
    },
    ROW_NUM: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('funcionario', funcionario);