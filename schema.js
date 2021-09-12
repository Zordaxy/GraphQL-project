import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID,
    firstName: String,
    lastName: String,
    gender: Gender,
    email: String
  }

  enum Gender {
    MALE,
    FEMALE
  }

  type Query {
    getFriend(id: ID): Friend
  }

  input FriendInpit {
    id: ID,
    firstName: String,
    lastName: String,
    gender: Gender,
    email: String
  }

  type Mutation {
    createFriend(input: FriendInpit): Friend
  }
`);

export default schema;