const Employee = require("./employee");

class Manger extends Employee {
  //manager constructor adding to employee constructor
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manger";
  }
}
module.exports = Manger;
