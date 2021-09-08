const inquirer = require("inquirer");



class Department {

    constructor (id, department_name){
        this.id = id;
        this.department_name = department_name;
    }

showDepartment(answers){
    const depAnswer = db.query(`SELECT department_name AS Dept from department`);
    console.table(depAnswer);
}

addDepartment(answers){
    db.query(`INSERT INTO department VALUES (id, ?)`,answers);
}

}

module.exports = Department