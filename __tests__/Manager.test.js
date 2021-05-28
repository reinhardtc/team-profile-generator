const Manager = require('../lib/Manager.js');

test('creates a new manager object', () => {
  const manager = new Manager('Steve', 10, 'steave@outlook.com', 25);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
