// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager("Dylan Sam", "90", "dylansam@hotmail.com", "Boss101");
    expect(manager.name).toEqual("Dylan Sam");
    expect(manager.id).toEqual("90");
    expect(manager.email).toEqual("dylansam@hotmail.com");
    expect(manager.officeNumber).toEqual("Boss101");
});


// TEST TO GET OFFICE NUMBER
test("check if getOfficeNumber() returns office number", () => {
    expect(manager.getOfficeNumber()).toEqual("Boss101");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(manager.getRole()).toEqual("Manager");

});