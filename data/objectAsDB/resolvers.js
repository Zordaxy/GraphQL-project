const friendDB = {};

class Friend {
  constructor(id, {firstName, lastName, gender, email}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

// resolvers map
export const resolvers = {
  Query: {
    getFriend: (id) => {
      return new Friend(id, friendDB[id]);
    }
  },

  Mutation: {
    createFriend: ({input}) => {
      const id = require('crypto').randomBytes(10).toString('hex');
      friendDB[id] = input;
      return new Friend(id, input);
    }
  }
}

// Execution example:
// mutation {
//   createFriend(input:{
//     firstName: "John",
//     lastName: "Smith",
//     gender: MALE
//   }){
//     firstName
//   }
// }