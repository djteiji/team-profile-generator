// const checkIfEqual = require('../lib/Employee.js');

// test('checks if 10 is equal to 10', () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });

const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee ('Mike', 643, 'teiji7130@yahoo.com');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


})