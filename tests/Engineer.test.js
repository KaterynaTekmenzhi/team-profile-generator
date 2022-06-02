const Engineer = require('../lib/Engineer');

// initialize engineer object
test('should initialize engineer object', () => {
    const newEngineer = new Engineer('Kat', 1, 'kat@gmail.com', 'KaterynaTekmenzhi');
    expect(newEngineer.github).toEqual('KaterynaTekmenzhi');
});

// return Engineer
test('should return role', () => {
    const newEngineer = new Engineer('Kat', 1, 'kat@gmail.com', 'KaterynaTekmenzhi');
    expect(newEngineer.getRole()).toEqual('Engineer');
});

// return github username
test('should return github username', () => {
    const newEngineer = new Engineer('Kat', 1, 'kat@gmail.com', 'KaterynaTekmenzhi');
    expect(newEngineer.getGithub()).toEqual('KaterynaTekmenzhi');
});