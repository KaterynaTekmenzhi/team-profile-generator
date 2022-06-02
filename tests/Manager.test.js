const { exportAllDeclaration } = require('@babel/types');
const Manager = require('../lib/Manager');

describe("getRole", () => {
    test('should return Manager', () => {
        const manager = new Manager('Kat', 2, 'Kat@gmail.com', '123-456-7890');
        
        expect(manager.getRole()).toBe('Manager');
    });
   })