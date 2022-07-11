const Manger = require("../lib/Manger");
const Employee = require("../lib/Employee");
// Testing Office Number
test("Set the Office Number for arguement sake", () => {
    const newNumber = 1234567;
    const mangerTest = new Manger("Manny", 30, "MannyBodega@BestBodega.com", newNumber);
    expect(mangerTest.officeNumber).toBe(newNumber);
})
//Testing Role
test("Set the Role for arguement sake", () => {
    const newRole = "Manger";
    const mangerTest = new Manger("Manny", 30, "MannyBodega@BestBodega.com", 1234567);
    expect(mangerTest.getRole()).toBe(newRole);
})
// Verifying Office Number
test("test the Office Number is right", () => {
    const newNumber = 1234567;
    const mangerTest = new Manger("Manny", 30, "MannyBodega@BestBodega.com", 1234567);
    expect(mangerTest.getOfficeNumber()).toBe(newNumber);
});