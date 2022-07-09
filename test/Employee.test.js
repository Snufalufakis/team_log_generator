const Employee = require("..lib/employee");
test("Lets test the constructor!", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Set the name for arguement sake!", () => {
  const name = "Manny";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Give Manny an Id for testing", () => {
  const newEmployee = 9000;
  const e = new Employee("Bodega", newEmployee);
  expect(e.id).toBe(newEmployee);
});

test("Give Manny a cool email for testing", () => {
  const newEmployee = "MannyBodega@BestBodega.com";
  const e = new Employee("Bodega", 30, newEmployee);
  expect(e.email).toBe(newEmployee);
});

test("Lets call getName()", () => {
  const newEmployee = "Manny";
  const e = new Employee(newEmployee);
  expect(e.getName()).toBe(newEmployee);
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
