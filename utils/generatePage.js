const fs = require('fs');
const pageTemplate = require('../src/page-template');

const generatePage = answers => {
  return `<!DOCTYPE html>
  <html lang="en">
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/f4a393c93b.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <div>
          <h1 class="header">My Team</h1>
          </div>
  </header>
  <div calss="container">
  <div class="row row-cols-4 d-flex justify-content-center">
  ${answers}
  </div>
  </div>
      
  </body>
  </html>`;
};

module.exports = generatePage;
