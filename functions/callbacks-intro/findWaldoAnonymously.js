const findWaldo = function(names, found) {
  names.forEach(name => {
    const index = names.indexOf('Waldo')
    if (name === 'Waldo') {
      console.log(found(index))
    }
  })
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});