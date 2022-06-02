const Employee = require('../lib/Employee');

// initialize employee object
test('should initialize employee object', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');

    expect(newEmployee.name).toEqual('Kat');
    expect(newEmployee.id).toEqual(1);
    expect(newEmployee.email).toEqual('kat@gmail.com');
});

// return Employee
test('should return role', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');
    expect(newEmployee.getRole()).toEqual('Employee');
});

// return name
test('should return name', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');
    expect(newEmployee.getName()).toEqual('Kat');
});

// return id
test('should return id', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');
    expect(newEmployee.getId()).toEqual(1);
});

// return email
test('should return email', () => {
    const newEmployee = new Employee('Kat', 1, 'kat@gmail.com');
    expect(newEmployee.getEmail()).toEqual('kat@gmail.com');
});