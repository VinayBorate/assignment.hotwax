// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list.
 
// Note: Use map(), filter(), reduce(), some() and every() methods for above problems

//  e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())


let a=[4,3,3,5,7,7,11];
//----------------------Sum---a-------------------//
// for(let i=0 ;i<a.length;i++){
//     sum=sum+a[i];
// }
let sum=a.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log("Sum is ",sum);
//----------------------------min max--------------------//
let maxi = -Math.pow(2, 31);  //INT_MIN
let mini = Math.pow(2, 31) - 1; //INT_MAX

// for(let i=0 ; i<a.length;i++){
//     if(maxi < a[i]){
//         maxi = a[i];
//     }
//     if(mini > a[i]){
//         mini = a[i];
//     }
// }

let maxans = a.reduce(function(acc,curr){
    if(acc < curr){
        acc=curr;
    }
    return acc;
},maxi);

let minans = a.reduce(function(acc,curr){
    if(acc > curr){
        acc=curr;
    }
    return acc;
},mini);

console.log("Maximum Value",maxans);
console.log("Minimum Value",minans);
//------------------------Plrime No --------b-&-c-------------//
function isPrime(no){
    if(no <= 1){
        return 0;
    }
    for(let i=2;i<=Math.sqrt(no);i++){
        if(no%i === 0){
            return 0;
        }
    }
    return 1;
}
let primecount=0;
// for(let i=0;i<a.length;i++){
//     if(isPrime(a[i])){
//        primecount++; 
//     }
// }

primecount=a.reduce(function(acc,curr){
    if(isPrime(curr)){
        acc++;
    }
    return acc;
},0);

// console.log("----" + primecount);
if(primecount === a.length){
    console.log("List is full of prime number");
}
else if(primecount > 0){
    console.log("List has a prime number");
}
else{
    console.log("List has a no prime numbers");
}
//-----------------------Remove duplicate------d-------------//
console.log("Remove Duplicate(d)")
let dup = new Set(a);
let remdup = [...dup];

for (let i = 0; i < remdup.length; i++) {
    console.log(remdup[i]);
}

//-----------------------Remove duplicate-------e------------//
console.log("Remove Duplicate(e)");
let prev=-1;
a.sort();
const out=a.filter((x)=>{
    if(prev != x){
        prev=x;
       return prev;
    }
    
});
for(let i=0;i<out.length;i++){
    console.log(out[i]);
}


