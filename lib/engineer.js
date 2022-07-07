const Employee = require('./employee')

class Engineer extends Employee {
    // Engineer constructor adding to Employee constructor
    constructor(name, id, email, github) {
        // super calling employee constructor properties.
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;