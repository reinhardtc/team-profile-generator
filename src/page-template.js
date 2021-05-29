const generatePage = require('./utils/generatePage');

const generateManger = answers => {
  return `
  <div class="card bg-info" style="width: 18rem;">
  <div class="card-header">
  ${answers.managerName} <br>
  <i class="fas fa-mug-hot"></i> Manager
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${answers.managerID}</li>
  <li class="list-group-item">Email:<a href="mailto: ${answers.managerEmail}"> ${answers.managerEmail}</a></li>
  <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
  </ul>
  </div>
  `;
};
const generateEngineer = answers => {
  `<div class="card bg-info" style="width: 18rem;">
  <div class="card-header">
  ${answers.engineerName} <br>
  <i class="fas fa-mug-hot"></i> Manager
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${answers.engineerID}</li>
  <li class="list-group-item">Email:<a href="mailto: ${answers.engineerEmail}"> ${answers.engineerEmail}</a></li>
  <li class="list-group-item">Github:<a href="https://github.com/${answers.github}" target="_blank"> ${answers.github}</a></li>
  </ul>
  </div>`;
};

const generateIntern = answers => {
  `<div class="card bg-success" style="width: 18rem;">
  <div class="card-header">
  ${answers.internName} <br>
  <i class="fas fa-user-graduate"></i> Intern
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${answers.internID}</li>
  <li class="list-group-item">Email:<a href="mailto: ${answers.internEmail}"> ${answers.internEmail}</a></li>
  <li class="list-group-item">School: ${answers.school}</li>
  </ul>
  </div>
  `;
};

module.exports = { generateManger, generateEngineer, generateIntern };
