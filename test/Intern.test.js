const Intern = require("../lib/Intern");
//Testing School Name is working 
test("set the school name for arguement sake", () => {
    const schoolName = "UBC";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", schoolName);
    expect(newIntern.school).toBe(schoolName);
  });
// calling role on Intern to make sure it is working 
  test("testing role", () => {
    const schoolName = "Intern";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", "UBC");
    expect(newIntern.getRole()).toBe(schoolName);
  });
  // verifying School Name is working
  test("Testing getSchool method", () => {
    const schoolName = "UCB";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", schoolName);
    expect(newIntern.getSchool()).toBe(schoolName);
  })