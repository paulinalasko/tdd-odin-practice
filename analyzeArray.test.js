const analyzeArray = require('./analyzeArray')

test('analyzes array and return average, min, max, and length in an object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})