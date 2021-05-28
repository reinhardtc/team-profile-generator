const Engineer = require('../lib/Engineer.js');

test('creates a new engineer object', () => {
  const engineer = new Engineer('Steve', 10, 'steave@outlook.com', 'stevesgithub');

  expect(engineer.github).toEqual(expect.any(String));
});
