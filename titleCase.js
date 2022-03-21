const titleCase = function (str) {
  let words = str.split(' ');
 
  if(words.length > 1) {
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase()
    }
    return words.join(" ")
  }else {
   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}

titleCase("this is an example") //should return "This Is An Example"
titleCase("test") //should return "Test"
titleCase("i r cool") //should return "I R Cool"
titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
titleCase("") //should return ""
titleCase("A") //should return "A"