const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
// Testing Office Number
test("Set the Office Number for arguement sake", () => {
    const newNumber = 1234567;
    const managerTest = new Manager("Manny", 30, "MannyBodega@BestBodega.com", newNumber);
    expect(managerTest.officeNumber).toBe(newNumber);
})
//Testing Role
test("Set the Role for arguement sake", () => {
    const newRole = "Manager";
    const managerTest = new Manager("Manny", 30, "MannyBodega@BestBodega.com", 1234567);
    expect(managerTest.getRole()).toBe(newRole);
})
// Verifying Office Number
test("test the Office Number is right", () => {
    const newNumber = 1234567;
    const managerTest = new Manager("Manny", 30, "MannyBodega@BestBodega.com", 1234567);
    expect(managerTest.getOfficeNumber()).toBe(newNumber);
});