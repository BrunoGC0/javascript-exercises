const sumAll = function(number1, number2) {
    let start = Math.min(number1, number2);
    let end = Math.max(number1, number2);
    let soma = 0;

    for(let i = start; i <= end; i++){
        soma += i
    }

    return soma;
};

console.log(sumAll(2, 5));

// Do not edit below this line
module.exports = sumAll;
