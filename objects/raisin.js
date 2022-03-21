const raisinAlarm = function (cookie) {
  // Put your solution here
  for (const item of cookie) {
    if (item === '🍇') {
      return 'Raisin alert!'
    }
  } return 'All Good!'
}

console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫']))
console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇']))
console.log(raisinAlarm(['🍫', '🍫', '🍫']))

const raisinAlarmArray = function (cookies) {
  const result = []
  for (const cookie of cookies) {
    if (cookie.includes('🍇')) {
      result.push('Raisin alert!')
    } else {
      result.push('All Good!')
    }
  } 
  return result
}

console.log(raisinAlarmArray(
  [
    ['🍫', '🍫', '🍫'],
    ['🍫', '🍇', '🍫', '🍫', '🍇'],
    ['🍫', '🍫', '🍫']
  ]
))

console.log(raisinAlarmArray(
  [
    ['🍫', '🍫', '🍫'],
    ['🍫', '🍇', '🍫', '🍫', '🍇'],
    ['🍫', '🍫', '🍫'],
    ['🍫', '🍫', '🍇']
  ]
))

// Expected Output: ["Raisin alert!", "Raisin alert!", "All good!"]
