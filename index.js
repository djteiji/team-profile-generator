const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');

const teamArr = [];

const managerQuestions = () => {
   return inquirer.prompt ([
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
    //    console.log(manager);

   })
};

const addMembers = () => {
    console.log(`
====================
Add New Team Members
====================
`);

return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "What is this Team Member's role?",
        choices: ['Engineer', 'Intern']
    },
    
    {
        type: 'input',
        name: 'name',
        message: "What is your team member's name?"
    },

    {
        type: 'input',
        name: 'id',
        message: "Enter your Team Member's id number"
    },

    {
        type: 'input',
        name: 'email',
        message: "Enter your Team Member's email"
    },

    {
        type: 'input',
        name: 'github',
        message: "What is this Team Member's GitHub username?",
        when: (input) => input.role === "Engineer",
    },

    {
        type: 'input',
        name: 'school',
        message: "What is this Team Member's school?",
        when: (input) => input.role === 'Intern',
    },

    {
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to add additional Team Members?',
        default: false
    }

])
  .then(memberData => {

    let { name, id, email, role, github, school, confirmAddMember } = memberData;
    let member;

    if (role === 'Engineer') {
        member = new Engineer (name, id, email, github);

        // console.log(member);

    } else if (role === 'Intern') {
        member = new Intern (name, id, email, school);

        // console.log(member);
    }

    teamArr.push(member);

    if (confirmAddMember) {
        return addMembers(teamArr);
    } else {
        return teamArr;
    }
 })
};

// generate HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // if profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

managerQuestions()
    .then(addMembers)
    .then(teamArr => {
        return generatePage(teamArr);
      })
    .then(pageHTML => {
        return writeFile(pageHTML);
        })
        .catch(err => {
         console.log(err);
        });
    