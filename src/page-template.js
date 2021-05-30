const Employee = require('../lib/Employee');

function generateHTML(employee) {
  let employeeDiv = `<div>
    <h1>${employee.name}</h1>
    <p>${employee.id}</p>
  </div>`;

  switch (employee.getRole()) {
    case 'Engineer':
      employeeDiv = +'<p>Github : ' + answers.github;
      break;
    case 'Manager':
      employeeDiv = +'<p>Office Number : ' + answers.officeNumber;
      break;
    case 'Intern':
      employeeDiv = +'<p>School : ' + answers.school;
      break;
  }
}

module.exports = generateHTML;
