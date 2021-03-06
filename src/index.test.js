import fs from 'fs'
import path from 'path'
import gql from 'graphql-tag'
import expectedMocks from './mocks'
import { typeDefs, mocks } from './'

//
//  THIS IS A FLAKY TEST
//
// describe('Main imports (index.js)', () => {
//   it('imports the correct schema', () => {
//     let types = fs.readFileSync(
//       path.join(__dirname, 'types', 'typeDefs.graphql'),
//       'UTF-8'
//     )
//     let expected = gql`
//       ${types}
//     `
//     expect(typeDefs).toEqual(expected)
//   })

//   it('imports the correct mocks', () => expect(mocks).toEqual(expectedMocks))
// })

describe('Queries', () => {
  describe('allNews - query', () => {
    it('returns everything', () => {
      expect(mocks.Query().allNews()).toEqual({ len: [50, 100] })
    })

    it('returns correct count', () => {
      expect(mocks.Query().allNews(null, { count: 2 })).toEqual({ len: 2 })
    })
  })

  describe('currentDonationOptions - query', () => {
    it('returns 5 options', () => {
      expect(mocks.Query().currentDonationOptions()).toEqual({ len: 5 })
    })
  })
})
