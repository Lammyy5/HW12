const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee',
})

function init() {
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
    }
  ]).then((answer) => {
    switch (answer.action) {
      case "View all employees":
                    viewAllEmployees();
                    break;
                    case "Add an employee":
                    addEmployee();
                    break;
                    case "Update an employee role":
                    updateEmployeeRole();
                    break;
                    case "View all roles":
                    viewAllRoles();
                    break;
                    case "Add a role":
                    addRole();
                    break;
                    case "View all departments":
                    viewAllDepartments();
                    break;
                    case "Add a department":
                    addDepartment();
                    break;
  }});

function viewEmployees() {
  db.query('SELECT * FROM employee', (err, data) => {
    console.table(data)
  })
}

function ViewDepartments() {
  db.query('SELECT * FROM department', (err, data) => {
    console.table(data)
  })
}
function viewRoles() {
  db.query('SELECT * FROM role', (err, data) => {
    console.table(data)
  })
}
function addEmployees() {
//  todo
  }

function addDepartment() {
  // todo
}
function addRole() {
 
}
function updateEmployees() {
  inquirer.prompt([
    {
        type: "input",
        message: "What is the first name of the employee?",
        name: "firstname"
    },
    {
        type: "input",
        message: "What is the last name of the employee?",
        name: "lastname"
    },
    {
        type: "input",
        message: "What is the employees role id",
        name: "roleid"
    },
    {
        type: "input",
        message: "What is the employees manager id?",
        name: "managerid"
    }
   ]).then((data)=>{
    db.query(`UPDATE employee SET first_name = ?`,`UPDATE employee SET last_name = ?`,`UPDATE employee SET role_id = ?`, `UPDATE employee SET manager_id = ?`, [data.firstname, data.lastname, data.roleid, data.managerid], (err, res) => {
        if (err) throw err
            console.log("employee updated successfully!")
            init()
    })
   })
  }}