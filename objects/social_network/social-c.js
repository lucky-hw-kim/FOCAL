const data = {
  f01: {
    name: 'Alice',
    age: 15,
    follows: ['f02', 'f03', 'f04']
  },
  f02: {
    name: 'Bob',
    age: 20,
    follows: ['f05', 'f06']
  },
  f03: {
    name: 'Charlie',
    age: 35,
    follows: ['f01', 'f04', 'f06']
  },
  f04: {
    name: 'Debbie',
    age: 40,
    follows: ['f01', 'f02', 'f03', 'f05', 'f06']
  },
  f05: {
    name: 'Elizabeth',
    age: 45,
    follows: ['f04']
  },
  f06: {
    name: 'Finn',
    age: 25,
    follows: ['f05']
  }
}
// List everyone and their reach (sum of # of followers and # of followers of followers


// function sumOfFollowersFollowers () {

// }


function sumOfFollowers (data) {
  // console.log(data[key].name, data[key].follows.length)

  for(let key in data){
    console.log(data[key].follows.length)
  }

}

function calculateReach (data) {
  console.log(sumOfFollowers(data))

}

console.log(calculateReach(data))
