const { fetchQuotes } = require ('./fetch')
const request = require ('superagent');

describe('return a single quote from the futurama api',  () => {
    it('fetches one quote', async () => {
        const quote = {
            character: "Bender",
            quote: "I'm a fraud. A poor, lazy, sexy fraud.",
            image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
          }
          const results = fetchQuotes(quote)
  
      expect(results).toEqual({ 
          name: "Bender",
          text: "I'm a fraud. A poor, lazy, sexy fraud.",
          image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
      });
        })
});
