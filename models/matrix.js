const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
 country:{
    type:[],
    required:true
 }
})


module.exports = mongoose.model('User', userSchema);