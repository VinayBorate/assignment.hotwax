// Referances --> https://regexr.com/

// let reg = /vinay/g;// checks globally(case sensetive)
// let reg = /vinay/i; // checks (case insensetive)
// let reg = /vinay/ig; // checks (case insensetive) and globally


// console.log(reg);
// console.log(reg.source);

// let str="My VinAY name is vinay this is school of vinay the ball is hit by vinay";

// //----------------------------------------------------------------------------//
// //.exec() --> return a array for match and return NULL for no match
// let result = reg.exec(str);
// console.log(result);

// result = reg.exec(str);
// console.log(result);

// result = reg.exec(str);
// console.log(result);

// result = reg.exec(str);
// console.log(result);

// //--------------------------------------------------------------------//
// //.test() --> return true if match / return false if doesnot match

// let reg = /Vijay/g;    - will give false for this 
// let result2=reg.test(str);
// console.log(result2);

// //--------------------------------------------------------------------//
// //.match() --> this will return of array of results or NULL

// let result3 = reg.match(str); //#Note == This is wrong
// let result3 = str.match(reg);
// console.log(result3);

// //-------------------------------------------------------------------//
// //.search() -->Return index of first match else -1

// let result4 = reg.search(str); //#Note == This is wrong
// let result4 = str.search(reg);
// console.log(result4);

// //--------------------------------------------------------------------//
// //.replace() -->Return new replaced string with all the replacement (if no global flag is given then first will replace )

// let result5 = str.replace(reg,'Nancy');
// console.log(result5);

//------------------------Metacharacter Symbol ------------------------//

// let reg =/^vin/; // means expression will match if string starts with ex vin
// let reg =/ay$/; //means expression will match if string ends with ay 
// let reg =/.i.ay/; // it means dot ki place par kuch bhi aa sakta he and matches
// let reg =/v*y/; // it means * ke place par kitne bhi character a jaye to match karega
// let reg =/vi?nay?/; // it means i optional he  and y optional he
let reg = /vi\*nay/; // it will exactly match vi*nay in string 

let str = "vinay name is vinay this is school of vinay the ball is hit by vinay";

let result=reg.exec(str);
console.log("answer from exec",result);


if(reg.test(str)){
    console.log("Match Found");
}
else{
    console.log("Match Not Found");
}

