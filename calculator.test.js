const calculator = require('./calculator')

test('adds 3 + 8 to equal 11', () => {
  expect(calculator.add(3, 8)).toBe(11);
})

test('subtracts 2 from 4 to equal 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
})

test('multiplies 8 with 4 to equal 32', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
})

test('divides 72 by 9 to equal 8', () => {
  expect(calculator.divide(72, 9)).toBe(8);
})