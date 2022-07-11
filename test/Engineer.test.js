const Engineer = require("../lib/Engineer");

test("Give Engineer a GitHub username to test", () => {
    const engineerTest = "User@gitHub";
    const newEngineer = new Engineer("Manny", 30, "MannyBodega@BestBodega.com", engineerTest);
    expect(newEngineer.github).toBe(engineerTest);
  });
  test("Give the engineer a role to test", () => {
    const engineerTest = "Engineer";
    const newEngineer = new Engineer("Manny", 30, "MannyBodega@BestBodega.com", "User@gitHub");
    expect(newEngineer.getRole()).toBe(engineerTest);
  });
  test("Test the engineer github is working", () => {
    const engineerTest = "User@gitHub";
    const newEngineer = new Engineer("Manny", 30, "MannyBodega@BestBodega.com", engineerTest);
    expect(newEngineer.getGithub()).toBe(engineerTest);
  });
