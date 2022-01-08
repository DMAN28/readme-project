// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");

// TODO: Create an array of questions for user input


const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the title of the project?",
    name: "Tile"
},{
    type: "input",
    message: "What is the project about? Give a detailed description of your project",
    name:"Description"
},
{
    type : "input",
    message : "What does the user need to install to run this app (ie...dependencies)?",
    name: "Installation"
},
{
    type : "input",
    message : "Provide instructions and examples for use.",
    name: "Usage"
},
{
    type : "input",
    message : "Who contributed to this project?",
    name: "Contribution guidelines"
},
{
    type : "input",
    message : "Provide instructions and examples for use.",
    name: "Credits"
},
{
    type : "input",
    message : "What is your name",
    name: "Name"
},
{
    type : "input",
    message : "what is your name",
    name: "User name"
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
