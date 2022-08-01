const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shuffleArray should return an array of the same length", () => {
        const array1 = [1,2,3]
        const array2 = shuffleArray(array1)
        expect(array2.length).toEqual(array1.length)
    });
    test("shuffleArray should return an array with all the same items", () => {
        const array1 = [1,2,3]
        const array2 = shuffleArray(array1)
        expect(array2).toEqual(expect.arrayContaining(array1));
    });
})