const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    //CODE HERE
    test('can return an array', () => {
        let arr = [1,2,3,4,5,6,7,8,9,10]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
    })

    test('returns an array with the same items',() => {
        let arr = [1,2,3,4,5,6,7,8,9,10]
        let result = shuffleArray(arr)
        expect(result).toEqual(expect.arrayContaining(arr))
    })
})