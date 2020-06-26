// array of questions for user

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  
    {
        type: "input",
        name: "name",
        message: "What's your name?"
    },
    {
        type: "input",
        name: "title",
        message: "Write a title for your README"
    },
    {
        type: "input",
        message: "Write DESCRIPTION guidelines for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Write INSTALLATION guidelines for your project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Write USAGE guidelines for your project:",
        name: "usage"
    },
    {
        type: "list",
        message: "Use keyboard arrows and hit enter to choose a license",
        name: "license",
        choices: ["MIT", "Apache"]
    },
    {
        type: "input",
        message: "Write the names of the CONTRIBUTORS for your project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Write TEST guidelines for your project:",
        name: "test"
    },
    {
        type: "input",
        message: "Write an email address to be display for QUESTIONS on your project: ",
        name: "email"
    },
    {
        type: "input",
        message: "Write your Github user's name (will automatically display your user's name and a link to your Github): ",
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



