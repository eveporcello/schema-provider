import fs from 'fs'
import path from 'path'
import gql from 'graphql-tag'
import expectedMocks from './mocks'
import { typeDefs, mocks } from './'

describe('Main imports (index.js)', () => {

    it('imports the correct schema', () => {
        var types = fs.readFileSync(path.join(__dirname, 'types', 'typeDefs.graphql'), 'UTF-8')
        var expected = gql`${types}`
        expect(typeDefs).toEqual(expected)
    })

    it('imports the correct mocks', () => 
        expect(mocks).toEqual(expectedMocks)
    )

})

describe('Queries', () => {

    describe('allNews - query', () => {

        it('returns everything', () => {
            expect(mocks.Query().allNews()).toEqual({ len: [50, 100] })
        })
    
        it('returns correct count', () => {
            expect(mocks.Query().allNews(null, { count: 2 })).toEqual({ len: 2 })
        })
    })

})