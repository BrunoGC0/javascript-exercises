const leapYears = function(year) {
    const anoQuatro = year % 4 === 0;
    const anoCem = year % 100 === 0;
    const anoQuatrocentos = year % 400 === 0;

    if(anoQuatro && !anoCem || anoQuatrocentos){
        return true;
    }else{
        return false;
    }
};

console.log(leapYears(2000))
// Do not edit below this line
module.exports = leapYears;
