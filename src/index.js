const { ApolloServer } = require('apollo-server')
import schema from './types/typeDefs.graphql'
import allMocks, { currentUser } from './mocks'

export const typeDefs = schema
export const mocks = allMocks

export const context = ({ req }) =>
  !(req && req.headers.authorization) ? { currentUser: null } : { currentUser }

const resolvers = {}

export const mockH5Server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  mocks
})
