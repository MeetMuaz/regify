const { default: mongoose } = require("mongoose");

///////// register schema ////////
const registerSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
});
 
///////// export module ////////
module.exports = mongoose.model('Register', registerSchema);