const Intern = require("../lib/Intern");

test("set the school name for arguement sake", () => {
    const schoolName = "UBC";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", schoolName);
    expect(newIntern.school).toBe(schoolName);
  });

  test("testing role", () => {
    const schoolName = "Intern";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", "UBC");
    expect(newIntern.getRole()).toBe(schoolName);
  });
  test("Testing getSchool method", () => {
    const schoolName = "UCB";
    const newIntern = new Intern("Manny", 30, "MannyBodega@BestBodega.com", schoolName);
    expect(newIntern.getSchool()).toBe(schoolName);
  })