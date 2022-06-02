// generates HTML file from template
function generateHTML(newEmployee) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Profile Generator</title>
    </head>
    
    <body>
        <header>
            <h1 class="text-center">Employee Directory</h1>
        </header>
        <section class="card-group">
            ${newEmployee.map(generateCards)}
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`    
};

function generateCards(newEmployee) {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${newEmployee.getName()}</h2>
        </div>
        <div class="card-body">
            <h3>${newEmployee.getRole()}</h3>
            <ul>
                <li>ID: ${newEmployee.getId()}</li>
                <li>Email: ${newEmployee.getEmail()}</li>
            </ul>
        </div>
    </div>`
}

module.exports = generateHTML;