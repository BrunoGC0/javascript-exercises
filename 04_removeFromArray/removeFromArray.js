const numbers = [1, 2, 3];

const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)){
            newArray.push(item)
        }
    });

    return newArray;
};

console.log(removeFromArray(numbers, "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
