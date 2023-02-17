const { Command, program } = require('commander');
const { argv } = require('process');

const {
    addRegister,
    findRegister
} = require('./app');

program
  .version('0.0.0')
  .description('cli registration system');

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('r-a')
    .description('Add a customer')
    .action((firstname, lastname, phone, email) => {
        addRegister({firstname, lastname, phone, email});
    });

program 
    .command('find <name>')
    .alias('r-f')
    .description('find a customer')
    .action(name => {
        findRegister(name);
    });

program.parse(process.argv);