// array of questions for user

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Write a title for your README"
    },
    {
        type: "input",
        message: "Write a description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation for your project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage for your project:",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        name: "license",
        choices: ["MIT", "BSD", "CDDL", "EPL"]
    },
    {
        type: "input",
        message: "Contribution in your project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test for your project:",
        name: "test"
    },
    {
        type: "input",
        message: "Email: ",
        name: "email"
    },
    {
        type: "input",
        message: "Github: ",
        name: "github"
    }


];
inquirer.prompt(questions)
.then(function (data) {
        
       const fileName = 'sampleREADME.md';
        
        writeToFile(fileName, data)
    
    
    
})


//Write README function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err)
        }

        console.log("Success")
    })
}


// // function to initialize program
function init() {

}

// // function call to initialize program
// init()
