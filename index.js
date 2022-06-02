// // runs the application
// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// importing 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/writeFile');

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

const createEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Input employees role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'number',
            name: 'id',
            message: 'Input employees id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input employees email address',
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
            type: 'input',
            name: 'github',
            message: 'Input Engineers github username',
            when: (answers) => {
                if (answers.role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Input Interns school name',
            when: (answers) => {
                if (answers.role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Add another employee?',
            default: true
        }
    ])
    .then((answer) => {
        const addAnother = answer.addAnother;
        if (answer.role === 'Engineer') {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            newEmployee.push(engineer);
        } else if (answer.role === 'Intern') {
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            newEmployee.push(intern);
        }
        if (addAnother) {
            return createEmployee(newEmployee);
        }
        else {
            return newEmployee;
        }
    })
};

// createEmployee();
// createManager() 
//     .then(createEmployee)
//     .then((newEmployee) => {
//         return writeFile(newEmployee);

//     })

// const init = () => {
//     createManager()
//         .then(createEmployee)
//         const generateTeam = generateHTML(newEmployee)
//         .then((answer) => fs.writeFileSync('./dist/index.html', generateTeam(newEmployee)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.log(err));
// };

// console.log(newEmployee);
// init();

createManager()
		.then(createEmployee)
		.then((teamArray) => {
			generateHTML(teamArray);
		})
		.then(() => {
			console.log(`Successfully completed!`);
		})
		.catch((err) => console.error(err));

