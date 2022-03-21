const printItems = function(array) {
  array.forEach((item) => {
    if(Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}  

const array1 = ["😎", ["💩", "🤗"], "😼", "😂"];
const array2 = ["😎", "💩", "🤗", "😼", "😂"];
const array3 = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array3);
// printItems(array2);

// const printItems = function(array) {
//   while (array.length > 0) {
//     const element = array.shift();

//     if (Array.isArray(element)) {
//       element.reverse().forEach((newElement)=> {
//         array.unshift(newElement);
//       });
//     } else {
//       console.log(element);
//     }
//   }
// }