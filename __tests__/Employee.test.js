const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
  const employee = new Employee('Steve', 10, 'steave@outlook.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
