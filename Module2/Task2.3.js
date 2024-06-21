// Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them
//--------------------------------------------------------------//
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let arr =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even=[];
let odd=[];
let prime=[];
// for(let i=0;i<10;i++){
//     if(arr[i]&1){
//         //odd number
//         odd.push(arr[i]);
//     }
//     else{
//         even.push(arr[i]);
//     }
// }
even=arr.filter((num)=>{
  return (num&1) === 0;
});

odd=arr.filter((num) =>{
    return (num&1) !== 0;
});

console.log("Even Numbers");
for(let i=0;i<even.length;i++){
    console.log(even[i]);
}
//---------------------------------------------//
console.log("Odd Numbers");
for(let i=0;i<odd.length;i++){
    console.log(odd[i]);
}
    
//--------------------------------------------//
console.log("Prime Numbers");
    
    // for(let i=0;i<arr.length;i++){
    //     let no=arr[i];
    //     if(isPrime(no)){
    //         prime.push(no);
    //     }
    // }

    prime=arr.filter((num) => {
        return isPrime(num);
    });

    for(let i=0;i<prime.length;i++){
        console.log(prime[i]);
    }
