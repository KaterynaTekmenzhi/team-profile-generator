const Employee = require('../lib/Employee');

// initialize manager object
test('should initialize manager object', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');

    expect(newEmployee.name).toEqual('Kat');
    expect(newEmployee.id).toEqual(1);
    expect(newEmployee.email).toEqual('kat@gmail.com');
});

test('should return role', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com', '253-555-5555');
    expect(newEmployee.getRole()).toEqual('Employee');
});