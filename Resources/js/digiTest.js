var number = 145;

var digit = 0;
var factorial = 1;
var sum = 0;
while (number > 0) {
  // taking modtod get the last digit
  digit = number % 10;
  // calculating the factorial for the digit

  for (var i = 1; 1 <= digit; i++) {
    factorial = factorial * i;
  }
  // printing the factorial
  console.log(factorial);
  // adding the factorial to the sum later tocheck the number is strong or not.
  sum += factorial; // sum = sum + factorial
  // reseting the factorial to 1 to get a supportto calculate the factorial of the next digit.

  factorial = 1;
  // dividing the number by 10 to removethe last digit and applying floor function  to remove the fraction from it.

  number = math.floor(number / 10);
}

console.log(number);
console.log(sum);

if (sum == temp) {
  console.log("number is strong");
} else {
  console.log("no is not strong");
}

// palindrome number :
// 121 : 121 is the reverse number
