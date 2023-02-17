const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Register = require("./models/register");

// ///////// setup connection ////////
// const { MONGO_URI } = process.env;
// mongoose.set("strictQuery", false);
// mongoose.connect(MONGO_URI)
// .then(()=> {
//     console.info("REGIFY => connected!");
// })
// .catch((err)=>{
//     console.info("REGIFY => not connected!" + err); 
// });

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
const { MONGO_URI } = process.env;
const db = mongoose.connect(MONGO_URI);



///////// add register ////////
const addRegister = (register) => {
    Register.create(register).then(register => {
        console.log('New Customer Added');
        // mongoose.connection.close();
        db.close();
    })
}


///////// find register ////////
const findRegister = (name) => {
    const search = new RegExp(name,'i');
    Register.find({$or: [{ fistname: search}, { lastname: search }]})
    .then(register =>{
        console.info(customer);
        console.info(`${register.length} => matches`);
        // mongoose.connection.close();
        db.close();
    });
}


module.exports = {
    addRegister,
    findRegister
}

