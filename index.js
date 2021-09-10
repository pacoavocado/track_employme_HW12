const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
require('console.table');


init()
// Connect to database
async function init() {
  const db = await mysql.createConnection(
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

  question();
  function question() {
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
        switch (answers.first_Q) {
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
      });

    async function viewAllEmp() {
      const newEmployee = await db.query(`SELECT * FROM employee`);
      console.table(newEmployee);
    }

    async function viewAllDept() {
      const depAnswer = await db.query(`SELECT * FROM department`);
      console.table(depAnswer);
    }

    async function viewAllRoles() {
      const allRoles = await db.query(`SELECT * FROM emp_role`);
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
          db.query(`INSERT INTO employee SET first_name = ${newEmp} SET last_name = ${newEmp2}`)
        });

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
          const newRole = answers.new_role
          const newPay = answers.new_pay
          db.query(`INSERT INTO emp_role SET title = ${newRole} SET salary = ${newPay}`)
        });


    }

    function addDept() {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'enter a new department',
            name: 'new_dept'
          }
        ])
        .then((answers) => {
          const newDept = answers.new_dept
          db.query(`INSERT INTO department SET department_name = ${newDept}`)
        });
    };

  };
}