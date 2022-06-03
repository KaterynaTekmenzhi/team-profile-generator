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
        <header class="navbar bg-danger">
            <h1 class="text-center w-100 bg-danger text-white">Team Generator</h1>
        </header>

        <main class="cardStack d-flex flex-wrap m-3 justify-content-center">
            ${cardStack}
        </main>
        
    </body>
    </html>
    `
}

const trackEmployee = (employee) => {
    switch (employee.getRole()) {
        case 'Engineer':
            return `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
        case 'Intern':
            return `School: ${employee.getSchool()}`;
        case 'Manager':
            return `Office Number: ${employee.getOfficeNumber()}`;
        default:
            return 'No information available';
    }
}

const generateCards = (newEmployee) => {
    let cardStack = '';
    newEmployee.forEach((employee) => {
        cardStack += `
        <div class="card-body border border-dark m-2 p-2">
            <div class=" bg-primary bg-gradient" style="max-width: 16rem;">
                <div class="card-header">${employee.getRole()}</div>
                <h5 class="card-title">${employee.name}</h5>
            </div>
            <ul class="list-group list-group-flush border-0" id="list">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item"><a href="mailto: kat@example.com" class="link-info" subject="subject text">${employee.getEmail()}</a></li>
                <li class="list-group-item" id="type">${trackEmployee(employee)}</li>
            </ul>
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