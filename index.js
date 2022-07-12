const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const templateDir = "./template/";
//classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let newMembers = "";

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
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              message: "What is the Manager's office number?",
              name: "officeNumber",
            })
            .then(function ({ officeNumber }) {
              createManager(name, id, email, officeNumber);
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
// A function to create  new employees.
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
        createMain();
      }
    })
    // an err catch in case the function breaks.
    .catch((err) => {
      console.log("Creating more employees failed", err);
      throw err;
    });
}
questionsForEmployees();

// Populate Html template with employee roles.
const newIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, "intern.html"),
    "utf8"
  );
  let internHtml = "";
  internHtml =
    internHtml +
    template
      .replace(/{{ name }}/g, intern.getName())
      .replace(/{{ role }}/g, intern.getRole())
      .replace(/{{ email }}/g, intern.getEmail())
      .replace(/{{ id }}/g, intern.getId())
      .replace(/{{ school }}/g, intern.getSchool());
  newMembers = newMembers + internHtml;
};
const newEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, "engineer.html"),
    "utf8"
  );
  let engineerHtml = "";
  engineerHtml =
    engineerHtml +
    template
      .replace(/{{ name }}/g, engineer.getName())
      .replace(/{{ role }}/g, engineer.getRole())
      .replace(/{{ email }}/g, engineer.getEmail())
      .replace(/{{ id }}/g, engineer.getId())
      .replace(/{{ github }}/g, engineer.getGithub());
  newMembers = newMembers + engineerHtml;
};
const newManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, "manager.html"),
    "utf8"
  );
  let managerHtml = "";
  managerHtml =
    managerHtml +
    template
      .replace(/{{ name }}/g, manager.getName())
      .replace(/{{ role }}/g, manager.getRole())
      .replace(/{{ email }}/g, manager.getEmail())
      .replace(/{{ id }}/g, manager.getId())
      .replace(/{{ officeNumber }}/g, manager.getOfficeNumber());
  newMembers = newMembers + managerHtml;
};
// Functions to create each new Constructor
function createManager(name, id, email, officeNumber) {
  const manager = new Manager(name, id, email, officeNumber);
  newManager(manager);
}

function createEngineer(name, id, email, github) {
  const engineer = new Engineer(name, id, email, github);
  newEngineer(engineer);
}

function createIntern(name, id, email, school) {
  const intern = new Intern(name, id, email, school);
  newIntern(intern);
}

// creating the index.html in the dist folder
function createMain() {
  let mainTemplate = fs.readFileSync(
    path.resolve(templateDir, "main.html"),
    "utf8"
  );
  var mainHtml = "";
  mainHtml = mainHtml + mainTemplate.replace(/{{ fillIn }}/g, newMembers);
  let file = path.join(__dirname, "dist", "/index.html");
  fs.writeFile(file, mainHtml, function (err) {
    if (err) {
      throw new Error(err);
    }
  });
}
