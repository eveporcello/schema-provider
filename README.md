# Schema Provider

Home of the High Fives Foundation GraphQL Schema.

## Starting Mock Apollo Server

To run a mock GraphQL server locally you can use the `h5-server` command:

```json
{
  "scripts": {
    "start:server": "h5-mock-server"
  }
}
```

## Incorporating typeDefs and Mocks

The `typeDefs` and `mocks` can be imported from npm and used to build an Apollo
Server:

```javascript
const { ApolloServer } = require('apollo-server')
const { typeDefs, mocks } = require('@highfivesfoundation/schema-provider')

const resolvers = {}

var server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks
})

server
  .listen()
  .then(({ url }) => `running at ${url}`)
  .then(console.log)
  .catch(console.error)
```

## Mock Authorization

If you want the mock server to return a sample authorized user, send any
`Authorization` header.
