'use strict'

const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

var chave = 'string de conexão'

module.exports.connect = () => {
    mongoose.connect(chave, err => {
        if(err) {
            console.log('mongodb funcionando');
        } else {
            console.log('mongodb não funcionando');
        }
    }, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        UseCreateIndexes: true
        });
}