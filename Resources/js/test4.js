//  find out factorial of number.


// 5! : 5 * 4 * 3 * 2 * 1 or  1 * 2 * 3 * 4 * 5
// 5! : 20 * 3 * 2 * 1
// 120
var result = 1;
for (var i = 5; i >= 1; i--) {
    if (i == 0 || i== 1) {console.log (result)}
result=result * i;
}
console.log(result);

// strong number :
// 145 : 1! + 4! +  5!
//     :  1 +  24 + 120
// 145
// if sum of factorial = original number then that number is called as strong number.