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

// EMPLOYEE ADD FUNCTION
function empAdd(){
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

//EMPLOYEE REMOVE FUNCTION
function empRemove(){
    connection.query("SELECT * FROM role").then(function(response){
           return inquirer()   


// View all Employees
function viewAllEmp() {
    // console.log("view employees")
    connection.query(`SELECT employee.id,employee.first_name,employee.last_name 
    ,role.title,role.salary ,department.name department,
    concat(employee2.first_name," ", employee2.last_name) manager
    FROM employee 
    LEFT JOIN role on employee.role_id=role.id
    LEFT JOIN employee employee2 on employee.manager_id=employee2.id
    LEFT JOIN department on department.id=role.department_id
    `,
        (err, data) => {
            console.log("err", err)
            console.table(data)
            start()
        })
};


//VIEW ALL EMPLOYEES FROM DEPARTMENTS
function viewAllEmpByDepartment() {
    connection.query("SELECT name FROM department", function (err, res) {
        if (err) throw err;
        console.table(res)
    })

    start()
}


// VIEW ALL EMPLOYEES BY MANAGERS 
function viewAllEmpByManager() {
    // console.log("view employees by manager")
    connection.query("SELECT * FROM employee WHERE role_id = 1", (err, data) => {
        // console.log(data);
        const mgmtNames = []
        data.forEach(item => {
            mgmtNames.push(`${item.first_name}`)
        })
        // console.log(mgmtNames);
        inquirer.prompt({
            type: "list",
            choices: mgmtNames,
            name: "Manager",
            message:"Choose a Manager"
        })
            .then(function (answer) {
                // User's answer choice
                const userChoice = answer.Manager
                // Manager's ID getting found and chosen
                let managerID;
                // data coming from original query
                data.forEach(Manager => {
                    if (Manager.first_name === userChoice) {
                        managerID = Manager.id
                    }
                })
                connection.query(`SELECT * FROM employee WHERE manager_id = ${managerID}`, (err, data) => {
                    // console.log("err",err)
                    console.table(data)
                    start()
                })
            })
    })
};

// UPDATE ROLES
function updateEmpRole() {
    connection.query("SELECT title FROM role", function (err, res) {
        if (err) throw err;
        console.table(res)
    })

    start()
}

// who is the employees role? (list)
// who is this employees manager?

