import { Friends } from "./dbConnectors";

// resolvers map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return Friends.getFriend(id);
    }
  },

  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        email: input.email,
        language: input.language,
        age: input.age,
      });
      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        })
      })
    },
  },
};
