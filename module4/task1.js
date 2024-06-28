// Implement code to deep clone an object using JSON methods

const people = [
    { id: 1, name: "Amit Kumar", age: 17 },
    { id: 2, name: "Rahul Dixit", age: 55 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 },
];

let clone = JSON.parse(JSON.stringify(people)); // to deep clone a object

people[0].name = "Vinay";
console.log(clone);
console.log(people);

//---------------------------------------------------------------------------//
// why do we need deep copy
// const animal = [
//     { id: 1, name: "Cat", age: 17 },
//     { id: 2, name: "Dog", age: 55 },
//     { id: 3, name: "Cow", age: 55 },
//     { id: 4, name: "Tigar", age: 35 },
//     { id: 5, name: "Lion", age: 17 },
// ];

// let copy = {...animal};
// animal[0].name="Bird";
// console.log(animal);
// console.log(copy);


// const animal = [
//     { id: 1, name: "Cat", age: 17 },
//     { id: 2, name: "Dog", age: 55 },
//     { id: 3, name: "Cow", age: 55 },
//     { id: 4, name: "Tigar", age: 35 },
//     { id: 5, name: "Lion", age: 17 },
// ];

// let copy = animal;
// animal[0].name="Bird";
// console.log(animal);
// console.log(copy);


