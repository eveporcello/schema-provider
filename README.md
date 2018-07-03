Schema Provider
=================
Home of the High Fives Foundation GraphQL Schema.

## Starting Mock Apollo Server
To run a mock GraphQL server locally you can use the `h5-server` command:

```json
{
   "scripts": {
      "start:server": "h5-server start --port 4001"
   }
} 
```

## Incorporating typeDefs and Mocks
The `typeDefs` and `mocks` can be imported from npm and used to build an Apollo Server:

```javascript
import { ApolloServer } from 'apollo-server'
import { typeDefs, mocks } from '@highfivesfoundation/schema-provider'

const resolvers = {}

const server = new ApolloServer({
  resolvers,
  resolvers,
  mocks
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}!`))
```

