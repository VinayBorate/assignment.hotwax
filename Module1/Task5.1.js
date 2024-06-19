// . Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list ()

let a=[4,3,3,5,7,7,11];
let sum=0;
//-------------------------------------------------//
for(let i=0 ;i<a.length;i++){
    sum=sum+a[i];
}
console.log("Sum is ",sum);
//-------------------------------------------------//
let maxi = -Math.pow(2, 31);  //INT_MIN
let mini = Math.pow(2, 31) - 1; //INT_MAX

for(let i=0 ; i<a.length;i++){
    if(maxi < a[i]){
        maxi = a[i];
    }
    if(mini > a[i]){
        mini = a[i];
    }
}
console.log("Maximum Value",maxi);
console.log("Minimum Value",mini);
//--------------------------------------------------//
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
for(let i=0;i<a.length;i++){
    if(isPrime(a[i])){
       primecount++; 
    }
}
//console.log("----",primecount);
if(primecount === a.length){
    console.log("List is full of prime number");
}
else if(primecount > 0){
    console.log("List has a prime number");
}
else{
    console.log("List has a no prime numbers");
}

//----------------Removing duplicate-----------------------------//
a.sort();
let i = 1;
while (i < a.length) {
  if (a[i - 1] === a[i]) {
    a.splice(i, 1);
  } else {
    i++;
  }
}

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}





