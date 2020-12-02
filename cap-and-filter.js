const capitalizeAndFilter = array => {
    const newArray = [];

    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        const capElement = element.toUpperCase();

        if (!capElement.startsWith('F')) {
            newArray.push(capElement);
        }
    }
    return newArray
};

module.exports = {
    capitalizeAndFilter
}