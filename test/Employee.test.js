const Employee = require("../lib/Employee");
test("Lets test the constructor!", () => {
  const bojangles = new Employee();
  expect(typeof bojangles).toBe("object");
});

test("Set the name for arguement sake!", () => {
  const name = "Manny";
  const bojangles = new Employee(name);
  expect(bojangles.name).toBe(name);
});

test("Give Manny an Id for testing", () => {
  const newEmployee = 9000;
  const bojangles = new Employee("Bodega", newEmployee);
  expect(bojangles.id).toBe(newEmployee);
});

test("Give Manny a cool email for testing", () => {
  const newEmployee = "MannyBodega@BestBodega.com";
  const bojangles = new Employee("Bodega", 30, newEmployee);
  expect(bojangles.email).toBe(newEmployee);
});

test("Lets call getName()", () => {
  const newEmployee = "Manny";
  const bojangles = new Employee(newEmployee);
  expect(bojangles.getName()).toBe(newEmployee);
});

test("Lets call getId()", () => {
  const newEmployee = 9000;
  const e = new Employee("Bodega", newEmployee);
  expect(e.getId()).toBe(newEmployee);
});

test("Lets call getEmail()", () => {
  const newEmployee = "MannyBodega@BestBodega.com";
  const e = new Employee("Bodega", 30, newEmployee);
  expect(e.getEmail()).toBe(newEmployee);
});

test('getRole() should return employee of the year', () => {
  const newEmployee = "Employee";
  const e = new Employee("Manny", 30, "MannyBodega@BestBodega.com");
  expect(e.getRole()).toBe(newEmployee);
});
