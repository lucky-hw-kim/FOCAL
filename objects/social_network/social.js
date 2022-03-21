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

function biggestFollower (input) {
  // return name of the individual who follows the most people.
  let mostFollows = 0
  let biggestFollower

  for (const info in input) {
    const follows = input[info].follows
    const name = input[info].name
    if (mostFollows < follows.length) {
      mostFollows = follows.length
      biggestFollower = name
    }
  }
  return biggestFollower
}

console.log(biggestFollower(data))

console.log('-------------------------')

// find a person with most follower

// 1. make a function to create object for list of id
// 2. compare the id with the most number with name of users
// 3. return name of users.

function makeObjList (data) {
  const list = {}
  for (const key in data) {
    for (const x of data[key].follows) {
      if (!list[x]) {
        list[x] = 1
      } list[x]++
    }
  } return list
}

function mostFollowedID (objList) {
  const arrayOfMostFollowed = []
  let highNum = 0

  for (const value in objList) {
    if (objList[value] >= highNum) {
      highNum = objList[value]
    }
  }
  for (const value in objList) {
    if (highNum === objList[value]) {
      arrayOfMostFollowed.push(data[value].name)
    }
  }
  return arrayOfMostFollowed
}

function mostPopular (data) {
  // Callback functions
  const objList = makeObjList(data)
  const arrList = mostFollowedID(objList)
  const result = arrList.join(', ')
  return result
}
console.log(mostPopular(data)) // higher order function

// outputs a list of everyone and for each of them, the names of who they follow and who follows them.

// 1. get a list of people who they are following
// 2. get a list of people who follow them
// 3. printout each list of everyone and list created
function getFollowing (keys) {
  const followingList = []
  for (const x of data[keys].follows) {
    followingList.push(data[x].name)
  }
  return followingList
}

function getFollowed (keys) {
  const followerList = []
  for (const x in data) {
    if (data[x].follows.includes(keys)) {
      followerList.push(data[x].name)
    }
  }
  return followerList
}

function printAll (data) {
  for (const keys in data) {
    // callback functions
    const followings = getFollowing(keys)
    const followers = getFollowed(keys)
    console.log('-----------')
    console.log(data[keys].name + '\n\n' + 'Following: ' + followings + '\n' + 'Followed By: ' + followers)
    console.log('-----------')
  }
}

console.log(printAll(data))

// returns a list of names for those who follow someone that doesn't follow them back.
function listOfnotFollowed (key) {
  const list = []
  for (const x of data[key].follows) {
    // access through person they are following and compare to the key person
    if (!data[x].follows.includes(key)) {
      list.push(data[x].name)
    }
  }
  return list
}

function unrequitedFollowers (data) {
  const result = []
  for (const key in data) {
    const unrequited = listOfnotFollowed(key)

    if (unrequited.length < 1) {
      console.log(`${data[key].name} has no unrequited followers`)
    } else {
      console.log(`${data[key].name} is not followed back by ${unrequited} `)
    }
  }
}

unrequitedFollowers(data)

// Identify who has the most followers over 30

function mostFollowerOver30 (data) {
  const peopleOver30Follow = {}
  let temp
  let values
  let keys
  let max
  const listOfFollowingOver30 = []
  for (const key in data) {
    keys = Object.keys(peopleOver30Follow)
    values = Object.values(peopleOver30Follow)
    max = Math.max(...values)
    if (data[key].age > 30) {
      temp = data[key].follows
      for (const x of temp) {
        if (!peopleOver30Follow[data[x].name]) {
          peopleOver30Follow[data[x].name] = 1
        } else {
          peopleOver30Follow[data[x].name]++
        }
      }
    }
  }
  for (let i = 0; i < values.length; i++) {
    if (max === values[i]) {
      listOfFollowingOver30.push(keys[i])
    }
  }
  return listOfFollowingOver30
}

console.log(mostFollowerOver30(data))

// Identify who follows the most people over 30

function followOver30 (data) {
  const oldPeople = {}
  let values
  let keys
  let max = 0
  const listOfFollowerOver30 = []
  for (const key in data) {
    values = Object.values(oldPeople)
    keys = Object.keys(oldPeople)
    max = Math.max(...values)
    for (const x of data[key].follows) {
      if (data[x].age > 30) {
        if (!oldPeople[data[key].name]) {
          oldPeople[data[key].name] = 1
        } else {
          oldPeople[data[key].name]++
        }
      }
    }
  }
  for (let i = 0; i < values.length; i++) {
    if (max === values[i]) {
      listOfFollowerOver30.push(keys[i])
    }
  }
  return listOfFollowerOver30
}
console.log(followOver30(data))

// List everyone and their reach (sum of # of followers and # of followers of followers

//WORKING ON IT!!

function calculateReach () {
  
}

