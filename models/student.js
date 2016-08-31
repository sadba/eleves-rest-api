//Dependencies

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


//Schema
var studentSchema = new mongoose.Schema({
	nom: String,
	age: Number,
	nationalite: String,
	classe: String
});


//Return model
module.exports = mongoose.model('Students', studentSchema);