const findWaldo = function(names) {
  names.forEach(name => {
    if (name === 'Waldo') {
      console.log(`Found Waldo at index ${names.indexOf('Waldo')}!`)
    }
  })
}

// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);