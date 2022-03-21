const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');

  const temp = object1[key1];
  object1[key1] = object2[key2];
  object2[key2] = temp;


 /*  
  const val1 = object1[key1]; 
  const val2 = object2[key2]; 

  object1[key1] = val2;
  object2[key2] = val1; */

/*   for (let key in object1) {
    if (key1 === key) {
      object1[key] = val2; 
    }
  }

  for (let key in object2) {
    if (key2 === key) {
      object2[key] = val1; 
    }
  } */
  


  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });