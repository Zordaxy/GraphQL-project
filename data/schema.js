// import { buildSchema } from 'graphql';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Friend {
    id: ID,
    firstName: String,
    lastName: String,
    gender: Gender,
    email: String, 
    language: String,
    age: Int
  }

  enum Gender {
    MALE,
    FEMALE
  }

  type Query {
    getFriend(input: FriendInpit): Friend
  }

  input FriendInpit {
    id: ID,
    firstName: String,
    lastName: String,
    gender: Gender,
    email: String, 
    language: String,
    age: Int
  }

  type Mutation {
    createFriend(input: FriendInpit): Friend
    updateFriend(input: FriendInpit): Friend
    deleteFriend(id: ID!): String
  }
`;

// "!" means not optional parameter

// TODO: graphql-tools is deprecated. Migrate to @graphql-tools/utils
const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };