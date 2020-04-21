/*
**  Write a function called factorial which accepts a number and return the factorial of that number. A factorial is the product of an integer and all the
**  integers below it; e.g., factorial (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

**  Sample Input:
**  factorial(1) //1
**  factorial(2) //2
**  factorial(4) //24
**  factorial(7) //5040
*/

function factorial(base) {
    if(base === 0) { return 1;}
    return base * factorial(base - 1);
}

console.log(
    factorial(1), //1
    factorial(2), //2
    factorial(4), //24
    factorial(7) //5040
);