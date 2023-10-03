// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    const readmeMarkdown = `
    
# Project Title: ${answers.title}

## Description: ${answers.description}

## Installation: ${answers.installation}

## Usage: ${answers.usage}

${answers.license}

    






Some more normal text here
    
    
    
    `


    return readmeMarkdown

}

module.exports = {generateMarkdown:generateMarkdown}
