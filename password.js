const str = process.argv[2]
const newArray = []
function obfuscate (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      newArray.push('4')
    } else if (str[i] === 'e') {
      newArray.push('3')
      console.log(newArray)
    } else if (str[i] === 'o') {
      newArray.push('0')
    } else if (str[i] === 'l') {
      newArray.push('1')
    } else {
      newArray.push(str[i])
    }
  }
  console.log(newArray.join(''))
}

obfuscate(str)
