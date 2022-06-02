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
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container">
            <div class="card-columns">
                ${cardStack.map(generateCards).join('')}
            </div>
        </div>
    </body>
    </html>`
}

const generateCards = (employee) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
        </div>
        <div class="card-body">
            <h3>${employee.getRole()}</h3>
            <ul class >
                <li>ID: ${employee.getId()}</li>
                <li>Email: ${employee.getEmail()}</li>
            </ul>
        </div>
    </div>`
}

const writeFile = (newEmployee) => {
    writeFileSync(mainHTML, generateHTML(newEmployee));
}

module.exports = writeFile;