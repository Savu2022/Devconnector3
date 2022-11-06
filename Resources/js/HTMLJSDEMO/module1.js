import { num, hello } from  "./module1.js";
import { hello3 } from "./module2.js";
// for default no need of {} and you can use any name
// if we have only export then use {} ===> can hold a function / value.

//  in case of default we can use any name while importing it.

//mod : hello function and num variable
// mod.num
// mod.hello()

  console.log("value is" + num);
hello("advik");
hello3("hello");

