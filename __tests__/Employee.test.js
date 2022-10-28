const Employee = require('../lib/Employee');

// creates employee object test
test('creates an employee object', () => {
    const employee = new Employee('Danielle', 90, 'deelock98@gmail.com');

    expect(employee.name).toEqual("Danielle Locklear");
    expect(employee.id).toEqual("90");
    expect(employee.email).toEqual("deelock98@gmail.com");
});

// gets id from getId() 
test('gets employee name', () => {
    expect(employee.getName()).toEqual("Danielle Locklear");
});

// gets id from getId() 
test('gets employee ID', () => {
    expect(employee.getId()).toEqual("90");
});

// gets emails from getEmail()
test('gets employee email', () => {
    expect(employee.getEmail()).toEqual("deelock98@gmail.com");
});

// gets role from getRole()
test('gets role of employee', () => {
    expect(employee.getRole()).toEqual("Employee");
}); 
