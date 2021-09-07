const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees','Add Employee','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department','Quit'],
            name: 'first_Q',
        },
    ]);
};

const employees = [];
// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => {
      if (answers.first_Q = "View All Employees") {
        SELECT employee.id, first_name, last_name,  
        FROM
      }
      if (answers.first_Q = "Add Employee") {
        SELECT    
        FROM
      }
      if (answers.first_Q = "Update Employee Role") {
        SELECT    
        FROM
      }
      if (answers.first_Q = "View All Roles") {
        SELECT    
        FROM
      }
      if (answers.first_Q = "Add Role") {
        SELECT    
        FROM
      }
      if (answers.first_Q = "View All Departments") {
        SELECT department  
        FROM
      }
      if (answers.first_Q = "Add Department") {
        SELECT    
        FROM
      }
      if (answers.first_Q = "Quit") {
        SELECT    
        FROM
      }
     
      else {
        promptUser()
      }
    })

    .then(() => console.log('Successfully wrote to index.HTML'))
    .catch((err) => console.error(err));
};

init();

// Import our modular routers for notes 
// const notesRouter = require('./reviews');


// const app = express();

// app.use('/notes', notesRouter);


// module.exports = app;
