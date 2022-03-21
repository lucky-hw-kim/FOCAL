function sumToOne (n) {
  let sum = 0;
  if (n === 1) {
    return 1
  } 
   return n + sumToOne(n - 1);
}

console.log(sumToOne(10))
