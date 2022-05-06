const Engineer = require('../lib/Engineer')

test('creates new engineer object', () => {
    const engineer = new Engineer ('Mike', 643, 'teiji7130@yahoo.com', 'djteiji')

    expect(engineer.userName).toEqual(expect.any(String));
})