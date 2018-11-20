const { ApolloServer } = require('apollo-server')
import schema from './types/typeDefs.graphql'
import allMocks from './mocks'

export const typeDefs = schema
export const mocks = allMocks

const resolvers = {}

export const mockH5Server = new ApolloServer({ typeDefs, resolvers, mocks })
