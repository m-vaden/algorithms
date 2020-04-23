/*
**  Write a recursive function called reverse which accepts a string and returns a new string in reverse

**  Sample Input:
**  reverse('awesome') // 'emosewa'
**   reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(str) {
        if(str.length === 1) {return str[0];}
        return str[str.length - 1] + reverse(str.slice(0, (str.length - 1)));
}

console.log(
    reverse('awesome'), // 'emosewa'
    reverse('rithmschool') // 'loohcsmhtir'
)