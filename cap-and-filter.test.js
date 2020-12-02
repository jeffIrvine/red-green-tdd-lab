const { capitalizeAndFilter } = require ('./cap-and-filter')


describe(' takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
    it('returns an array of capitalized string leaving out words starting with f', () => {
        const array = ['spot', 'rover', 'bingo', 'fred']
        capitalizeAndFilter()
    })
});
