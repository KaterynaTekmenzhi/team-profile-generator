const { exportAllDeclaration } = require('@babel/types');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');

test('should initialize manager object', () => {
    const manager = new Manager('Kat', 1, 'kat@gmail.com', '253-555-5555');
    expect(manager.officeNumber).toEqual('253-555-5555');
});

test('should return Manager', () => {
    const manager = new Manager('Kat', 1, 'kat@gmail.com', '253-555-5555');
    expect(manager.getRole()).toEqual('Manager');
});

    
test('should return office number', () => {
    const manager = new Manager('Kat', 1, 'kat@gmail.com', '253-555-5555');
    expect(manager.getOfficeNumber()).toEqual('253-555-5555');
});
