const inquirer = require('inquirer');

const createLog = () => {
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
                return 'Please enter a valid email address';
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
        if (!answer.id) {
            console.log('Please enter a valid id');
            getIdNumber();
        } else {
            console.log(answer);
        }
    })
}