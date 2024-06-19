// Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.

let arr=[0, 2, 4, 6, 8, 10, 12, 14, 16];

let double=[];
let half=[];
for(let i=0;i<arr.length;i++){
    double.push(arr[i]*2);
}
for(let j=0;j<arr.length;j++){
    half.push(arr[j]/2);
}

console.log("My Double List")
for(let i=0;i<double.length;i++){
    console.log(double[i]);
}
console.log("My Half List");
for(let i=0;i<half.length;i++){
    console.log(half[i]);
}
