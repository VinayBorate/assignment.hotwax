// 6.  Provided an array of integers, find if there are any duplicates in the array.

// Output:
// true -  if any value appears at least twice in the array,
// false - if every element is distinct.

// Example:
// Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// Output -> true

// Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19]
// Output -> false

let a = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

a.sort();


let hasDuplicates = false;
for (let i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) {
        hasDuplicates = true;
        break;
    }
}

console.log(hasDuplicates); 
