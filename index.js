const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");
//classes
const Manger = require("./lib/manger");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function questionsForEmployees() {
  inquire
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
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Intern":
          inquire
            .prompt({
              type: "input",
              message: "What school does your intern attend?",
              name: "school",
            })
            .then(function ({ school }) {});
      }
    });
}
