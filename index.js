// packages needed for this application
const inquirer = require('inquirer');

// importing 
const Manager = require('./lib/Manager');

// array for adding generated employees to
const newEmployee = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
            validate: function(value) {
                var pass = value.match(
                    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
                );
                if (pass) {
                    return true;
                }
                console.log('Please enter a valid email address');
                return false;
            }
        },
        {
            name: 'id',
            message: 'What is the employee id?',
            type: 'number'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        },
    ])
    .then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        newEmployee.push(manager);
        console.log(newEmployee);
    })
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer email?',
            validate: function(value) {
                var pass = value.match(
                    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
                );
                if (pass) {
                    return true;
                }
                console.log('Please enter a valid email address');
                return false;
            }
        },
        {
            name: 'id',
            message: 'What is the employee id?',
            type: 'number'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer github username?',
        },
    ])
    .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        newEmployee.push(engineer);
        console.log(newEmployee);
    })
}

createManager();
console.log(newEmployee);