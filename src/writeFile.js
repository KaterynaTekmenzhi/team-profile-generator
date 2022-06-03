// // template helper code
const { writeFileSync } = require('fs');

const mainHTML = './dist/index.html';

// generates HTML file from template
const generateHTML = (cardStack) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Generator</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card-columns">
                        ${cardStack}
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}

const trackEmployee = (newEmployee) => {
    switch (newEmployee.getRole()) {
        case 'Engineer':
            newEmployee.push(new Engineer(newEmployee.getName(), newEmployee.getId(), newEmployee.getEmail(), newEmployee.getGithub()));
            break;
        case 'Intern':
            newEmployee.push(new Intern(newEmployee.getName(), newEmployee.getId(), newEmployee.getEmail(), newEmployee.getSchool()));
            break;
        case 'Manager':
            newEmployee.push(new Manager(newEmployee.getName(), newEmployee.getId(), newEmployee.getEmail(), newEmployee.getOfficeNumber()));
            break;
        default:
            console.log('Error: Employee role not found');
    }
}

const generateCards = (newEmployee) => {
    let cardStack = '';
    newEmployee.forEach((employee) => {
        cardStack += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.getRole()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID: ${employee.getId()}</h6>
                    <p class="card-text">${employee.getName()}</p>
                    <p class="card-text">${employee.getEmail()}</p>
                    <p class="card-text">${employee.getRole()}</p>
                </div>
            </div>
        `
    })
    return cardStack;
}

const writeFile = (newEmployee) => {
    const cardStack = generateCards(newEmployee);
    return writeFileSync(mainHTML, generateHTML(cardStack));
}

module.exports = writeFile;