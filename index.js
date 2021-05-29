const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./utils/generatePage');
const { generateManger, generateEngineer, generateIntern } = require('./src/page-template.js');
const Team = [];

function addManager() {
  inquirer.prompt([
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
  ]);
}

function addEngineer() {
  inquirer.prompt([
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
  ]);
}

function addIntern() {
  inquirer.prompt([
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
  ]);
}

function generateTeam() {
  let { name, id, role, email, github, school } = employeeInfo;
  if (role === 'Manager') {
    let employee = new Manager(name, id, email, officeNumber);
    var newManager = generateManger(employee);
    Team.push(newManager);
  } else if (role === 'Engineer') {
    let employee = new Engineer(name, id, email, github);
    var newEngineer = generateEngineer(employee);
    Team.push(newEngineer);
  } else if (role === 'Intern') {
    let employee = new Intern(name, id, email, school);
    var newIntern = generateIntern(employee);
    Team.push(newIntern);
  } else {
    var template = generatePage(Team);
    fs.writeFile('teamProfile.html', template, function (err) {
      if (err) {
        return console.log(err);
      } else {
        return console.log('your page has been generated!');
      }
    });
  }
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

chooseEmployee();
