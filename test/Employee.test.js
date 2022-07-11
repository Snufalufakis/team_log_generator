const Employee = require("../lib/Employee");
// Setting up the constructor for testing purposes
test("Lets test the constructor!", () => {
  const bojangles = new Employee();
  expect(typeof bojangles).toBe("object");
});
//Seting a name for testing the constructor
test("Set the name for arguement sake!", () => {
  const name = "Manny";
  const bojangles = new Employee(name);
  expect(bojangles.name).toBe(name);
});
// Seting up an Id for testing the constructor
test("Give Manny an Id for testing", () => {
  const newEmployee = 9000;
  const bojangles = new Employee("Bodega", newEmployee);
  expect(bojangles.id).toBe(newEmployee);
});
// Seting up an email for testing the constructor
test("Give Manny a cool email for testing", () => {
  const newEmployee = "MannyBodega@BestBodega.com";
  const bojangles = new Employee("Bodega", 30, newEmployee);
  expect(bojangles.email).toBe(newEmployee);
});
// testing the constructor to output the correct name
test("Lets call getName()", () => {
  const newEmployee = "Manny";
  const bojangles = new Employee(newEmployee);
  expect(bojangles.getName()).toBe(newEmployee);
});
// testing the constructor to output the correct id
test("Lets call getId()", () => {
  const newEmployee = 9000;
  const e = new Employee("Bodega", newEmployee);
  expect(e.getId()).toBe(newEmployee);
});
// testing the constructor to output the correct email
test("Lets call getEmail()", () => {
  const newEmployee = "MannyBodega@BestBodega.com";
  const e = new Employee("Bodega", 30, newEmployee);
  expect(e.getEmail()).toBe(newEmployee);
});
// testing the constructor to output the correct role
test('getRole() should return employee of the year', () => {
  const newEmployee = "Employee";
  const e = new Employee("Manny", 30, "MannyBodega@BestBodega.com");
  expect(e.getRole()).toBe(newEmployee);
});
