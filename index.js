// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
// const { ADDRGETNETWORKPARAMS } = require('dns');

const teamArr = [];

const managerQuestions = () => [
   inquirer
   .prompt ([
       {
           type: 'input',
           name: 'name',
           message: 'Who is your team manager?'
       },

       {
        type: 'input',
        name: 'id',
        message: "Enter your team manager's id number"
       },

       {
        type: 'input',
        name: 'email',
        message: "Enter your team manager's email"
       },

       {
        type: 'input',
        name: 'officeNumber',
        message: "Enter your team manager's office number"
       },
   ]).then(managerInfo => {
       const {name, id, email, officeNumber} = managerInfo;
       const manager = new Manager (name, id, email, officeNumber);

       teamArr.push(manager);
       console.log(manager);

       employeeInfo();

   })
];

const employeeInfo = () => [
    
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        },
  ]).then(choices => {
    if ('Engineer') {
        
        engineerInfo();
    }
    // else {
    //     internInfo();
    // }
    
  })
];

const engineerInfo = () => [
    inquirer
    .prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter your Engineer's id number"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter your Engineer's email"
        },

        {
            type: 'input',
            name: 'userName',
            message: "Enter your Engineer's GitHub username"
           },

    ]).then(engineerInfo => {
        // data for employee types 

        let {name, id, email, userName} = engineerInfo; 
        let engineer = new Engineer (name, id, email, userName); 

        teamArr.push(engineer);
        console.log(engineer);
    })
];


// const internInfo = () => [

    

// ]


managerQuestions();

// addManager()
//   .then(addEmployee)
//   .then(teamArray => {
//     return generateHTML(teamArray);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });