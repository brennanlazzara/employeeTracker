const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rosebud13!',
    database: 'employee_trackerDB'
});
connection.connect((err) => {
    if (err) throw err;
   start();
});

function employee(){
    return inquirer.prompt([{
        type: "list",
        name: "employerToDo",
        choices: ["View All Employees", "View all empolyees by department", 
        "View all employess by manager", "Add employee", "Remove employee", "update employee role", "update employee manager"],
        message: "What would you like to do?"
    }]);
};

function employeeAdd(){
    connection.query("SELECT * FROM role").then(function(response){
        console.log(response);
           return inquirer([{
        type: "input",
        name: "employeeFirstName",
        message: "What employees first name?"
    },
{
    type: "input",
    name: "employeeFirstName",
    message: "What employees last name?"
}, 

])  
    });
} 


function start() {
    console.log('hello');
    employee().then(function(answer){
        answer.employerToDo
        if (answer.employerToDo === "Add employee")
        {empAdd()}
        if(answer.employerToDo === "Remove employee")
        {empRemove()}
        if(answer.employerToDo === "View All Employees")
        {viewAllEmp()}
        if(answer.employerToDo === "View all empolyees by department")
        {viewAllEmpByDepartment()}
        if(answer.employerToDo === "View all employess by manager")
        {viewAllEmpByManager()}
        if(answer.employerToDo === "update employee role")
        {updateEmpRole()}
        if(answer.employerToDo === "update employee manager")
        {updateManagerRole()}
    })
}




// who is the employees role? (list)
// who is this employees manager?

