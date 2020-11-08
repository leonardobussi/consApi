'use strict'

const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

var chave = 'mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/robocropteste?retryWrites=true&w=majority'

module.exports.connect = () => {
    mongoose.connect(chave, err => {
        if(err) {
            console.log('mongodb não funcionando');
        } else {
            console.log('mongodb funcionando');
        }
    }, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        UseCreateIndexes: true
        });
}