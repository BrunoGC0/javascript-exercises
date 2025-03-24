const repeatString = function(name, number) {
    let string = ""
    for(let i = 1; i <= number; i++){
        string += name
    }

    return string
}

console.log(repeatString('goodbye', 3))

// Do not edit below this line
module.exports = repeatString;
