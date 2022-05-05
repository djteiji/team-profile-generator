const Manager = require('../lib/Manager')

test ('creates a new manager object', () => {
    const manager = new Manager ('Mike', 643, 'teiji7130@yahoo.com', 8)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})