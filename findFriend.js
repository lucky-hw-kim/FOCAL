// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = function(contacts, fName, field) {
  let result = {};
  let buddy;
 
  for (const contact of contacts) {
    if (contact.name === fName)  {
      result.name = contact.friends[0];
    }
  }
  for (const contact of contacts) {
    if (contact.name === result.name)  {
      result[field] = contact[field];
      if (result[field] === undefined) {
        return 'Not found';
      }
    }
  }
  if (Object.values(result).length === 0) {
    return 'Not found';
  }
  return result;
};

console.log(findFriend(contacts, "Abbott", "phone"));
//should return { name: "Costello", phone: "767 676 7676" }
console.log(findFriend(contacts, "Buster", "email"));
//should return { name: "Hardy", email: "hardy@hardyharhar.com" }
console.log(findFriend(contacts, "Bob", "phone"));
// should return "Not found"
console.log(findFriend(contacts, "Costello", "birthday"));
//should return "Not found" (but if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information)