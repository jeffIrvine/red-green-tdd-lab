const { copyAndPush } = require('./copy-push');

describe('copyAndPush testing', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        const something = copyAndPush(numbers, 4);
        expect(something).toEqual([1, 2, 3, 4])
    })
});
