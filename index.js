const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
require("console.table");

init();
// Connect to database
async function init() {
  const db = await mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // TODO: Add MySQL password here
      password: "",
      database: "employees_db",
    },
    console.log(`Connected to the employees database.`)
  );

  question();
  function question() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
          ],
          name: "first_Q",
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
            db.connection.end();
            break;
          default:
        }
      });

    async function viewAllEmp() {
      const [newEmployee, fields] = await db.query(`SELECT * FROM employee`);
      console.log(newEmployee);
      console.table(newEmployee);
      question();
    }
    async function viewAllDept() {
      const [depAnswer] = await db.query(`SELECT * FROM department`);
      console.table(depAnswer);
      question();
    }
    async function viewAllRoles() {
      const [allRoles] = await db.query(`SELECT * FROM emp_role`);
      console.table(allRoles);
      question();
    }
    function addEmp() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "enter new employee first name",
            name: "first_name",
          },
          {
            type: "input",
            message: "enter new employee last name",
            name: "last_name",
          },
          {
            type: "list",
            message: "enter new employee role",
            choices: [
              { name: "Sales", value: 1 },
              { name: "Engineering", value: 2 },
              { name: "Finance", value: 3 },
              { name: "Legal", value: 4 },
            ],
            name: "role_id",
          },
        ])
        .then((answers) => {
          console.log(answers);
          const firstName = answers.first_name;
          const lastName = answers.last_name;
          const roleId = answers.role_id;
          db.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleId}, null)`
          );
          question();
        });
    }
    function updateEmpRole() {
      inquirer.prompt([
        {
          type: "list",
          message: "pick an employee to replace",
          choices: [
            { name: "John Doe", value: 1 },
            { name: "Mike Chan", value: 2 },
            { name: "Ashley Rodrigues", value: 3 },
            { name: "Kevin Tupik", value: 4 },
            { name: "Kunal Singh", value: 5 },
            { name: "Malia Brown", value: 6 },
            { name: "Sarah Lourd", value: 7 },
            { name: "Tom Allen", value: 8 },
          ],
          name: 'update_emp',
        },
        {
          type: "list",
          message: "enter new employee role",
          choices: [
            {name: "Sales Lead", value: 1},
            {name: "Salesperson", value: 2},
            {name: "Lead Engineer", value: 3},
            {name: "Software Engineer", value: 4},
            {name: "Account Manger", value: 5},
            {name: "Accountant", value: 6},
            {name: "Legal Team Lead", value: 7},
            {name: "Lawyer", value: 8},
          ],
          name: "emp_role",
        },
     
      ])
      .then((answers) =>{
        const updateEmp = answers.update_emp;
        const empRole = answers.emp_role;
     
        db.query(
          `UPDATE employee SET role_id = '${empRole}' WHERE id = ${updateEmp}`
        )
        question();
      })
    }
    function addRole() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "enter new title",
            name: "new_role",
          },
          {
            type: "input",
            message: "enter annual salary",
            name: "new_pay",
          },
          {
            type: "list",
            message: "enter new employee role",
            choices: [
              { name: "Sales", value: 1 },
              { name: "Engineering", value: 2 },
              { name: "Finance", value: 3 },
              { name: "Legal", value: 4 },
            ],
            name: "new_dept",
          },
        ])
        .then((answers) => {
          const newRole = answers.new_role;
          const newPay = answers.new_pay;
          const newDept = answers.new_dept;
          db.query(
            `INSERT INTO emp_role (title, salary, department_id) Values("${newRole}", ${newPay}, ${newDept})`
          );
          question();
        });
    }

    function addDept() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "enter a new department",
            name: "new_dept",
          },
        ])
        .then((answers) => {
          const newDept = answers.new_dept;
          db.query(`INSERT INTO department SET department_name = "${newDept}"`);
          question();
        });
    }
  }
}
