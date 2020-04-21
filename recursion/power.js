/*
**  Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This
**  function should mimim the functionality of Math.pow() - do not worry about negative bases and exponents.

**  Sample Input:
**  power(2,0), //1
**  power(2,2), //4
**  power(2,4) //16
*/

function power(num, exponent) {
    if(exponent === 0) { return 1;}
    return num * power(num, exponent - 1);
}

console.log(
    power(2,0), //1
    power(2,2), //4
    power(2,4) //16
);
