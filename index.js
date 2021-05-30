const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./utils/generatePage');
const generateHTML = require('./src/page-template');
const Team = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'managerID',
        message: 'What is their employee ID?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
      },
    ])
    .then(answers => {
      const manager = new Manager(
        answers.managerName,
        answers.managerEmail,
        answers.managerID,
        answers.officeNumber
      );
      Team.push(manager);
      chooseEmployee();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'engineerID',
        message: 'What is their employee ID?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is their github?',
      },
    ])
    .then(answers => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerEmail,
        answers.engineerID,
        answers.github
      );
      Team.push(engineer);
      chooseEmployee();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'internID',
        message: 'What is their employee ID?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is their school?',
      },
    ])
    .then(answers => {
      const intern = new Intern(
        answers.internName,
        answers.internEmail,
        answers.internID,
        answers.school
      );
      Team.push(intern);
      chooseEmployee();
    });
}

function chooseEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'What type of team member do you want to add?',
        choices: ['Engineer', 'Intern', 'Manager', 'No one else'],
      },
    ])
    .then(userSelect => {
      switch (userSelect.employeeType) {
        case 'Manager':
          addManager();
          break;
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          generateTeam();
      }
    });
}

function generateTeam(Team) {
  fs.writeFile('teamProfile.html', html, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log('Success!');
  });
}

chooseEmployee();
