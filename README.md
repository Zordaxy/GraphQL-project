## Sandbox project for GraphQL
Partially based on https://www.linkedin.com/learning/graphql-essential-training/data-persistence-with-sq course
---
### Initial setup:
- `npm init`
- `npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0`
- `npm install express express-graphql graphql nodemon`
- `// Install GraphQL plugin for VS Code`

### MongoDB Setup:
- `// Install mongoDB in machine and run service`
- `npm install mongoose`

### SQL lite setup:
- `npm install sqlite3 sequelize lodash casual`
---

### GraphiQL request example:
```
mutation {
  createFriend(input:{
    firstName: "John",
    lastName: "Smith",
    gender: MALE
  }){
    id,
    firstName
  }
}

query {
  getFriend(input: {id: "613e6cd07c4d703d209e1520"}) {
    id,
    lastName
  }
}
```
