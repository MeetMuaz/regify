#! /usr/bin/env node
const { Command, program } = require('commander');
const { prompt } = require('inquirer');
// npm i --save-dev @types/inquirer

//Register Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        messsage: 'Register Firstname:'
    },
    {
        type: 'input',
        name: 'lastname',
        messsage: 'Register Lastname:'
    },
    {
        type: 'input',
        name: 'phone',
        messsage: 'Register Phone:'
    },
    {
        type: 'input',
        name: 'email',
        messsage: 'Register Email:'
    }
];

const { argv } = require('process');

const {
    addRegister,
    findAllRegister,
    findOneRegister,
    updateRegister,
    removeRegister
} = require('./app');

program
  .version('0.0.0')
  .description('cli registration system');


// CREATE COMMAND
program
    .command('add')
    .alias('a')
    .description('add a register')
    .action(() => {
        prompt(questions).then(answers => addRegister(answers))
    });

// READ ALL COMMAND
program 
    .command('list')
    .alias('l')
    .description('list all register')
    .action(() => {
        findAllRegister();
    });

// READ ONE COMMAND
program 
    .command('find <name>')
    .alias('f')
    .description('find a register')
    .action(name => {
        findOneRegister(name);
    });

// UPDATE COMMAND
program 
    .command('update <_id>')
    .alias('u')
    .description('update a register')
    .action(_id => {
        prompt(questions).then(answers => updateRegister(_id, answers));
    });

// DELETE COMMAND
program 
    .command('delete <_id>')
    .alias('d')
    .description('find a register')
    .action( _id => {
            removeRegister(_id);
    });


program.parse(process.argv);




















// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('add a register')
//     .action((firstname, lastname, phone, email) => {
//        addRegister(firstname, lastname, phone, email)
//     });