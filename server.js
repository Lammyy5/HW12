const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee',
})

function init(){
inquirer.prompt([
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'Add Employee',
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
    ],
  },
  {
    type: 'input',
    name: 'department',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
  {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
  },
])}

function viewEmployees(){
// todo
}

function viewDepartments() {
  // todo
}
function viewRoles() {
  // todo
}
function addEmployees() {
  // todo
}
function addDepartment() {
  // todo
}
function addRole() {
  // todo
}
function updateEmployees() {
  // todo
}