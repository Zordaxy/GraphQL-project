import { Friends } from "./dbConnectors";

// resolvers map
export const resolvers = {
  Query: {
    getFriend: (root, { input }) => {
      return Friends.findOne(input);
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

    updateFriend: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        })
      })
    },

    deleteFriend: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.deleteOne({ _id: id }, (err) => {
          if (err) reject(err);
          else resolve("Successfully deleted Friend");
        })
      })
    }
  },
};
