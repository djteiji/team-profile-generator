const Engineer = require('../lib/Engineer')

test('creates new engineer object', () => {
    const engineer = new Engineer ('Mike', 643, 'teiji7130@yahoo.com', 'djteiji')

    expect(engineer.github).toEqual(expect.any(String));
})