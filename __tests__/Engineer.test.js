// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer("Kevin Grow", "111", "kevingrow@fakemail.com", "SuperHero")    
    expect(engineer.name).toEqual("Kevin Grow");
    expect(engineer.id).toEqual("111");
    expect(engineer.email).toEqual("kevingrow@fakemail.com");
    expect(engineer.github).toEqual("SuperHero");});

// gets github from getGithub()
test('gets engineer github value', () => {
    expect(engineer.getGithub()).toEqual("SuperHero");
});

// gets role from getRole() 
test('gets role of employee', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});