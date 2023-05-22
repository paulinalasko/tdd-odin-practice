// Array analyzer, returns min, max, length, and average
function analyzeArray(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const sum = array.reduce((current, previous) => {
    return current + previous;
  })
  const average = sum / array.length;

  const analyzedArray = {
    average,
    min,
    max,
    length,
  }

  return analyzedArray
}

module.exports = analyzeArray