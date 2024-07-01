// Implement code for sum using recursion

function sum(n, total) {
    // base case
    if (n <= 0) {
        return total;
    } else {
        total = n + sum(n - 1, total); // recursive call
    }
    return total;
}

let n=2;
let total=0;
let ans = sum(n,total);
console.log("Sum is " ,ans);