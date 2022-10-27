// link to page creation
const writeFile = require('./src/templateHTML.js');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

const displayMenu = () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option:",
        choices: ["Add Engineer", "Add Intern", "Finished Building Team"]
      }
    ]).then(menuOption => {
      switch (menuOption.menu) {
        case "Add Engineer":
          promptEngineer();
          break;
        case "Add Intern":
          promptIntern();
          break;
        case "Finished Building Team":
          // console.log(teamArray);
          htmlContent = generatePage(teamArray);
          // console.log(htmlContent);
  
          writeFile(htmlContent);
          break;
      }
    })
  };
  

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter engineer's name:"
      },
      {
        type: "number",
        name: "id",
        message: "Please enter engineer's employee ID number:"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter engineer's email address:"
      },
      {
        type: "input",
        name: "github",
        message: "Please enter engineer's GitHub username:"
      }
    ]).then((userInput) => {
      const engineer = new Engineer(userInput.name, userInput.id, userInput.email, userInput.github);
      console.log(engineer)
      teamArray.push(engineer);
      displayMenu();
    })
  };

  const promptIntern = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter intern's name:"
      },
      {
        type: "number",
        name: "id",
        message: "Please enter intern's employee ID number:"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter intern's email address:"
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the name of the school the intern attends:"
      }
    ]).then((userInput) => {
      const intern = new Intern(userInput.name, userInput.id, userInput.email, userInput.school);
      console.log(intern)
      teamArray.push(intern);
      displayMenu();
    })
  };
  


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager;