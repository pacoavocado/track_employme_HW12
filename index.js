const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql')
const express = require('express');

require('dotenv').config();
// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
      name: 'first_Q',
    },
  ]);
};

const employees = [];
const init = () => {
  promptUser()
    .then((answers) => {
      if (answers.first_Q = "View All Employees") {
        console.table(employee)
      }
      if (answers.first_Q = "Add Employee") {
        app.put('/api/employee/:id', (req, res) => {
          const sql = `UPDATE employee SET first_name, last_name = ? WHERE id = ?`;
          const params = [req.body.employee, req.params.id];

          db.query(sql, params, (err, result) => {
            if (err) {
              res.status(400).json({ error: err.message });
            } else if (!result.affectedRows) {
              res.json({
                message: 'employee not found'
              });
            } else {
              res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
              });
            }
          });
        });
      }
      if (answers.first_Q = "Update Employee Role") {
        SELECT
        FROM
      }
      if (answers.first_Q = "View All Roles") {
        // Read all movies
        app.get('/api/emp_role', (req, res) => {
          const sql = `SELECT id, title, salary AS title FROM movies`;

          db.query(sql, (err, rows) => {
            if (err) {
              res.status(500).json({ error: err.message });
              return;
            }
            res.json({
              message: 'success',
              data: rows
            });
          });
        });

      }
      if (answers.first_Q = "Add Role") {
        app.put('/api/emp_role/:id', (req, res) => {
          const sql = `UPDATE emp_role SET title = ? WHERE id = employee.id`;
          const params = [req.body.emp_role, req.params.id];

          db.query(sql, params, (err, result) => {
            if (err) {
              res.status(400).json({ error: err.message });
            } else if (!result.affectedRows) {
              res.json({
                message: 'role not found'
              });
            } else {
              res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
              });
            }
          });
        });
      }
      if (answers.first_Q = "View All Departments") {
        // Read all departments
        app.get('/api/department', (req, res) => {
          const sql = `SELECT id, department_name AS title FROM department`;

          db.query(sql, (err, rows) => {
            if (err) {
              res.status(500).json({ error: err.message });
              return;
            }
            res.json({
              message: 'success',
              data: rows
            });
          });
        });

      }
      if (answers.first_Q = "Add Department") {
        app.put('/api/department/:id', (req, res) => {
          const sql = `UPDATE department SET department_name = ? WHERE id = ?`;
          const params = [req.body.department, req.params.id];

          db.query(sql, params, (err, result) => {
            if (err) {
              res.status(400).json({ error: err.message });
            } else if (!result.affectedRows) {
              res.json({
                message: 'department not found'
              });
            } else {
              res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
              });
            }
          });
        });
      }
      if (answers.first_Q = "Quit") {

        promptUser()
      }

      else {
        promptUser()
      }
    })

    .then(() => console.log('iS iTs WoRkInG?'))
    .catch((err) => console.error(err));
};

init();

// Import our modular routers for notes 
// const notesRouter = require('./reviews');


// const app = express();

// app.use('/notes', notesRouter);


// module.exports = app;








// // Create a Employee
// app.post('/api/new-movie', ({ body }, res) => {
//   const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });


// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );
// // GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

module.exports = app;

