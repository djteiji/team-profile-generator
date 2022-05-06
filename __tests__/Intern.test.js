const Intern = require('../lib/Intern')

test('creates new intern object', () => {
    const intern = new Intern ('Mike', 643, 'teiji7130@yahoo.com', 'ucla')

    expect(intern.school).toEqual(expect.any(String));
})