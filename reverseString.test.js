const reverseString = require('./reverseString')

test('reverses string', () => {
    expect(reverseString('raspberry')).toBe('yrrebpsar');
})