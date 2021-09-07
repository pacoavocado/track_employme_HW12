const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const { prototype } = require('./lib/employee.js');
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
      {
      type: 'list',
      message: 'do you want to see a list of all the movies?',
      choices: ['yes', 'no'],
      name: "movies_list"
    },
  ]);
};

const employees = [];
// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => {
      if (answers.movie_list = "yes") {
        SELECT movie_name, review
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
