// Try the below code and identify which of the below programs are a valid case of hoisting?

/*
// 1)  This will show hoisting 

// Hoisting --> it appears that the delclrations move to the top of code.

// a = 10;
// console.log(a);
// var a;

  Internal implementation of above code is 

// var a; 
// a = 10;
// console.log(a);
// var a;

//In JavaScript, var declarations are hoisted to the top of their containing scope. This means that the 
  declaration of a is moved to the top, but the assignment a = 10 remains in place.


2) It will give error

a = 5;
console.log(a);
let a;

declarations are hoisted to the top of their block scope, they are not initialized until the declaration
is actually encountered in the code. This creates a temporal dead zone (TDZ) from the start of the block until
the let declaration is processed.
  */


// Note ----->
//    Function Expression and Class Expression are hot hosted .

 // example - 
//    myfun();
//    var myfun = function(){
//     console.log("Vinay");
//    }


//    const Rectangle =class {

//    }
      




