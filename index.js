const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employeeArray = [];


function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What's your name?",
        name: "name",
    }, {
        type: "input",
        message: "What's your ID?",
        name: "id",
    }, {
        type: "input",
        message: "What's your email?",
        name: "email",
    }, {
        type: "list",
        message: "What's your title?",
        name: "title",
        choices: ["Intern", "Engineer", "Manager"]
    }];

    return inquirer
        .prompt(promptArray)
}

function InquirerManager(name, id, email) {
    const promptArray = [{
        type: "input",
        message: "What's your office number?",
        name: "office"
    }];

    return inquirer 
        .prompt(promptArray)
        .then(function(officeNumber) {
            this.employee = new Manager(name, id, email, officeNumber);
            employeeArray.push(employee);
            run();
        });
}

function InquirerIntern(name, id, email) {
    const promptArray = [{
        type: "input",
        message: "What University do you go †o?",
        name: "university"
    }];

    return inquirer
        .prompt(promptArray)
        .then(function({ school }) {
            this.employee = new Intern(name, id, email, school);
            employeeArray.push(employee);
            run();
        });
}

function InquirerEngineer(name, id, email) {
    const promptArray = [{
        type: "input",
        message: "Please provide your GitHub username",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray)
        .then(function({ github }) {
            this.employee = new Engineer(name, id, email, github);
            employeeArray.push(employee)
            run();
        });
}

function run() {
            runInquirer()
                .then(function ({ name, id, email, title}) {
                    if (title === "Manager") {
                        InquirerManager(name, id, email)
                    } else if (title === "Intern") {
                        InquirerIntern(name, id, email)
                    } else if (title === "Engineer") {
                        InquirerEngineer(name, id, email)
                    } else if (title === "Exit") {
                        // 
                    }
                }).catch(function (_err) {
                    console.log("Something bad happened.");
                });



function displayInformation(employee) {
    if (employee.title === "Manager"){
        console.log(employee.officeNumber);
        return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
        return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
        return `github: ${employee.github}`;
    }
}

function getCardHtml() {
    let html = "";
    for (i = 0; i < maxTimes; i++) {
        console.log(employeeArray[i])
        
    }
}
}

run();
