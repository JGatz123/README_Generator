// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const markdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [];

// Create a function to write README file
function writeToFile(finalmarkdown) {
    fs.writeFile('README.md', finalmarkdown, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type:"input",
                name:"title",
                message:"What is the title of your project?"
            },
            {
                type:"input",
                name:"description",
                message:"What is the description of your project?"
            },
            {
                type:"list",
                name:"license",
                message:"Choose a license for your project",
                choices:["Apache License 2.0", "GNU General Public License V3.0", "MIT License", "None"]
            },
        ])
        .then((answers) => {
            // answers is an object //
            console.log(answers)
            // use user inputs to create markdown file //
           const finalmarkdown = markdown.generateMarkdown(answers) 
           console.log(finalmarkdown)
           // save final markdown as readme file //
           writeToFile(finalmarkdown);
        })
        .catch((error) => {
            console.log("error")
        });
}

// Function call to initialize app
init();
