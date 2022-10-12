// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require(Develop/utils/generateMarkdown.js);
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'Welcome to the ReadMe Generator, to start please provide full name:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter valid name');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'github',
    message: 'Please enter Github Username:',
    validate: githubInput => {
        if(githubInput) {
            return true;
        } else {
            console.log('Please enter Github in order for people to see more of your work');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: 'Provide email address:',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Provide email address, so people may contact you');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'title',
    message: 'What is the tittle of your project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('It is required to have a tittle for your project');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'description',
    message: "Enter your project description here:",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Provide a short description explaining the what, why, and how of your project.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the instructions for installation?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Provide installations instructions if needed');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Instructions for usage:',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Provide instructuctions for usage. This will help people navigate through your project.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Provide instructions on how other may contribute towards your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Describe the tests written for your application and how to use them:',
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('Please provide instructions on how others can contribute to your project.');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',
    default: false
},
{
    type: 'list',
    name: 'licenses',
    message: 'What license would you like to include?',
    choices: ['MIT', 'GPL', 'CC--0'],
    when: ({ confirmLicenses }) => {
        if (confirmLicenses) {
            return true;
        } else {
            return false;
        }
    }
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
