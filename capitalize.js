// Capitalize first letter function
function capitalize(string) {
  const upperCaseString = string.charAt(0).toUpperCase() + string.slice(1)
  return upperCaseString
}

module.exports = capitalize