const inquirer = require("inquirer");
const cTable = require(console.table)


class Employee {

    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    viewAllEmp(answer) {
        const newEmployee = db.query(`SELECT .concat( first_name + " " + last_name ) AS Employee Title FROM employee`)
        console.table(newEmployee)
    }
}

module.exports = Employee