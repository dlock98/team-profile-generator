// using Engineer constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern("Chelsea Small", "111", "chelsea@fakemail.com", "QueenofEye")    
    expect(intern.github).toEqual("Chelsea Small");
    expect(intern.id).toEqual("222");
    expect(intern.email).toEqual("chelsea@fakemail.com");
    expect(intern.github).toEqual("QueenofEye");});

// gets github from getGithub()
test('gets intern school value', () => {
    expect(intern.getSchool()).toEqual("William Dash University");
});

// gets role from getRole() 
test('gets role of intern', () => {
    expect(intern.getRole()).toEqual("Intern");
});