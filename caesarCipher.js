// Caesar cipher
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const cipher = 'bcdefghijklmnopqrstuvwxyza'

const singleCipher = (char) => {
  const index = alphabet.indexOf(char)
  let cipherCharacter = cipher[index]
  return cipherCharacter
}

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char !== char.toUpperCase()) {
    return true
  }
  return false
}

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char !== char.toLowerCase()) {
    return true
  }
  return false
}
const caesarCipher = (string) => {
  let newString = ''

  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i]) || isLowerCase(string[i])) {
      if (isLowerCase(string[i])) {
        newString += singleCipher(string[i])
      } else if (isUpperCase(string[i])) {
        newString += singleCipher(string[i].toLowerCase().toUpperCase())
      }
    } else {
      newString += string[i]
    }
  }
  return newString
}

module.exports = caesarCipher