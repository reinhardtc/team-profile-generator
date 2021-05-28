const Intern = require('../lib/Intern.js');

test('creates a new intern object', () => {
  const intern = new Intern('Steve', 10, 'steave@outlook.com', 'stevesgithub', 'UConn');

  expect(intern.school).toEqual(expect.any(String));
});
