const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");
//classes
const Manger = require("./lib/manger");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
// Repeated questions  for all Employee classes
function questionsForEmployees() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: " What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: " What is your email?",
      },
      {
        type: "list",
        message: " What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
 // questions added for diffrent employees based on thier role using switch method.
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              message: "What school does your intern attend?",
              name: "school",
            })
            .then(function ({ school }) {
              createIntern(name, id, email, school);
              createMoreEmployees();
            });
          break;
        case "Manger":
          inquirer
            .prompt({
              type: "input",
              message: "What is the manger's office number?",
              name: "officeNumber",
            })
            .then(function ({ officeNumber }) {
              createManger(name, id, email, officeNumber);
              createMoreEmployees();
            });
          break;
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              message: "What is the Engineer's GitHub username?",
              name: "github",
            })
            .then(function ({ github }) {
              createEngineer(name, id, email, github);
              createMoreEmployees();
            });
          break;
      }
    });
}
// A function to create a new employees.
function createMoreEmployees() {
  inquirer
    .prompt({
      type: "list",
      message: "Create more employees?",
      name: "createMoreEmployees",
      choices: ["Yes", "No"],
    })
    .then(function ({ createMoreEmployees }) {
      if (createMoreEmployees === "Yes") {
        questionsForEmployees();
      } else if (createMoreEmployees === "No") {
        renderHTML();
      }
    })
    // an err catch in case the function breaks.
    .catch((err) => {
      console.log("Creating more employees failed", err);
      throw err;
    });
}
questionsForEmployees();
