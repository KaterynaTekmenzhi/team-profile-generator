const Intern = require('../lib/Intern');

// initialize intern object
test('should return intern object', () => {
    const newIntern = new Intern('Kat', 1, 'kat@gmail.com', 'UW');
    expect(newIntern.school).toEqual('UW');
});

// return role Intern
test('should return role', () => {
    const newIntern = new Intern('Kat', 1, 'kat@gmail.com', 'UW');
    expect(newIntern.getRole()).toEqual('Intern');
});

// return school
test('should return school', () => {
    const newIntern = new Intern('Kat', 1, 'kat@gmail.com', 'UW');
    expect(newIntern.getSchool()).toEqual('UW');
});