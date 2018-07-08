import { NewsStory } from './News'

describe('NewsStory Mock', () => {

    it('returns correct fields', () => {
        let keys = Object.keys(NewsStory()).join(',')
        expect(keys).toEqual('id,title,description,url')
    })
    
})