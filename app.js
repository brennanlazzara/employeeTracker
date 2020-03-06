const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rosebud13!',
    database: 'employeeDB'
});
connection.connect((err) => {
    if (err) throw err;
    start();
});

function start() {
    console.log('hello');
}
connection.end();