function joinList (arr) {
  let result = ''
  if (arr.length === 0) {
    return result
  } else {
    for (let word of arr) {
      result += `${word}, `
    }
    return result + arr[arr.length - 1]
  }
}

// Test / Driver Code below...
const conceptList = ['function', 'array', 'object'];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
