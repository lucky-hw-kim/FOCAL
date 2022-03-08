const numOfDice = process.argv[2]
const arr = []
let randomNum
function generateRandom (numOfDice) {
  for (let i = 0; i < numOfDice; i++) {
    randomNum = Math.ceil(Math.random() * 6)
    arr.push(randomNum)
  }
  return arr
}

function printOutput (numOfDice) {
  let result = ''
  const numbers = generateRandom(numOfDice)
  for (let i = 0; i < numbers.length - 1; i++) {
    result += numbers[i] + ',' + ' '
  }
  return result + numbers[numbers.length - 1]
}
console.log(`Rolled ${numOfDice} dice: ${printOutput(numOfDice)}`)
