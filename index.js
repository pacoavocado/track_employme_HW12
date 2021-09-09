const inquirer = require('inquirer');
const mysql = require('mysql2')
const cTable = require('console.table');
// const { Department, Role, Employee } = require('../../models');



// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees database.`)
);

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
      name: 'first_Q',
    },
  ])
  .then((answers) => {
    switch (answers) {
      case "View All Employees":
        viewAllEmp();
        break;
      case "Add Employee":
        addEmp();
        break;
      case "Update Employee Role":
        updateEmpRole();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "Add Role":
        addRole();
        break;
      case "View All Departments":
        viewAllDept();
        break;
      case "Add Department":
        addDept();
        break;
      case "Quit":
        break;
      default:
    }
  };



function viewAllEmp() {
      const newEmployee = db.query(`SELECT * FROM employee`)
      console.table(newEmployee)
    }

function viewAllDept() {
      const depAnswer = db.query(`SELECT * FROM department`);
      console.table(depAnswer);
    }

function viewAllRoles() {
      const allRoles = db.query(`SELECT * FROM emp_role`);
      console.table(allRoles);
    }

function addEmp() {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'enter new employee first name',
            name: 'first_name'
          },
          {
            type: 'input',
            message: 'enter new employee last name',
            name: 'last_name'
          }
        ])
        .then((answers) => {
          const newEmp = answers.first_name;
          const newEmp2 = answers.last_name;
          db.query('INSERT INTO employee SET first_name = answers.first_name SET last_name = answers.last_name')
        }) 

    }

function updateEmpRole() {

    }

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'enter new title',
        name: 'new_role'
      },
      {
        type: 'input',
        message: 'enter annual salary',
        name: 'new_pay'
      }
    ])
    .then((answers) => {
      const newPay = answers.new_pay
      db.query('INSERT INTO emp_role SET title = answers.new', newPay)
    });


    }

function addDept() {
  inquirer
    .prompt([
      {
        type:'input',
        message: 'enter a new department',
        name: 'new_dept'
      }
    ])
    .then((answers) => {
      const newDept = answers.new_dept
      db.query('INSERT INTO department SET department_name = new_dept')
    })
    }


