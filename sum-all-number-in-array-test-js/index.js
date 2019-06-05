function sumItems(array) {
    let sum = 0;
    array.forEach(item => {
        if (Array.isArray(item)) {
            sum += sumItems(item);
        } else {
            sum += item;
        }
    });

    return sum;
}
// Sum all the numbers in the array

module.exports = sumItems;