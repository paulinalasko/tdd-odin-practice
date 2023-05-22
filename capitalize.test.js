const capitalize = require('./capitalize')

test('capitalizes first character', () => {
  expect(capitalize('cherry')).toBe('Cherry');
})

test('capitalizes first character', () => {
  expect(capitalize('blueberry')).toBe('Blueberry');
})