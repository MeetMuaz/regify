const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Register = require("./models/register");

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
// const { MONGO_URI } = process.env;
const db = mongoose.connect("mongodb://127.0.0.1:27017/regify");


///////// add register ////////
const addRegister = (register) => {
    Register.create(register).then(register => {
        console.info('100% / 100%');
        console.info('New Register Added');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.info(err);
        console.info('0% / 100%');
        mongoose.connection.close();
    })
}

///////// find all register ////////
const findAllRegister = () => {
    Register.find()
    .then(register =>{
        console.info(register);
        console.info(`${register.length} => matches`);
        console.info('100% / 100%');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.info(err);
        console.info('0% / 100%');
        mongoose.connection.close();
    }
    );
}


///////// find register with parameter ////////
const findOneRegister = (name) => {
    const search = new RegExp(name,'i');
    Register.find({$or: [{ firstname: search}, { lastname: search }]})
    .then(register =>{
        console.info(register);
        console.info(`${register.length} => matches`);
        console.info('100% / 100%');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.info(err);
        console.info('0% / 100%');
        mongoose.connection.close();
    })
}


///////// update register ////////
const updateRegister = (_id, register) => {
    Register.updateOne({_id}, {$set: register})
    .then(register => {
        console.info("Existing Register Updated");
        console.info('100% / 100%');
        mongoose.connection.close()
    })
    .catch((err) => {
        console.info(err);
        console.info('0% / 100%');
        mongoose.connection.close();
    })
}

///////// remove register ////////
const removeRegister = (_id) => {
    Register.deleteOne({ _id})
    .then(register => {
        console.info("Existing Register Removed");
        mongoose.connection.close();
        console.info('100% / 100%');
    })
    .catch((err) => {
        console.info(err);
        console.info('0% / 100%');
        mongoose.connection.close();
    })
}

module.exports = {
    addRegister,
    findAllRegister,
    findOneRegister,
    updateRegister,
    removeRegister,
}

