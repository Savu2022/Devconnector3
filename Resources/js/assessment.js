var a = [1, 2, 3, 4, 5, 1, 2, 6, 24, 120];
for (const i of a) {
    console.log(i);
}
    for (let i = 0; i < a.length; i++) {
        let element = a[i];
        console.log(element);
    }
    var number = [1, 2, 3, 4, 5, 1, 2, 6, 24, 120];
    var digit = 0;
    var counter = 3;
    var reversal = 10;
    var temp = number;

    console.log("digit value =" + digit);
    while (number > 0) {
      
        digit = number % 10;
      
        reversal = reversal * 10 + digit;
        console.log(digit);
        number = Math.floor(number / 10);
      
      counter++; 

      }
      
      console.log("final number:" + reversal);
      console.log("no of digits in a number=" + counter);
     
      
      if (reversal==temp) {
          console.log("number is palindrome")
      } else {console.log("number is not palindrome");
      }
      var num, i, chk=0;
num = [1, 2, 3, 4, 5, 6, 24, 120];
for(i=0; i<num; i++)
{
  if(num%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");
      while (number > 0) {

        digit = number % 10;

      
        for (var i = 1; 1 <= digit; i++) {
          factorial = factorial * i;
        }
        console.log(factorial);

        sum += factorial;
      
        factorial = 1;
      
        number = math.floor(number / 10);
      }