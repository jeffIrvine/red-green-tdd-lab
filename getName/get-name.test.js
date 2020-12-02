const { getName } = require('./get-name');

describe('getName', () => {
    it('returns an object\'s name property', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' }
        const name = getName(spot)
        expect(name).toEqual('spot')
    })
});
