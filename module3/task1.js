// Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]

//   a. Print id and name of the youngest and oldest person
//   b. Create another list having id and name of all the person above 18 years
//   c. Find the average age
//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively


// Note: Use map(), filter(), reduce, some() and every() methods for above problems


const people = [
    { id: 1, name: "Amit Kumar", age: 25 },
    { id: 2, name: "Rahul Dixit", age: 20 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 },
];

//------a)--Print id and name of the youngest and oldest person-----------//

const young=people.reduce(function(index,curr){
         if(curr.age < index.age){
            index = curr;
         }
         return (index);
},people[0]);//0 represents index value

console.log("Youngest ->"+ young.id +" "+young.name);

const oldest=people.reduce(function(index,curr){
    if(index.age < curr.age){
        index = curr;
    }
    return (index);
},people[0]);

console.log("Oldest ->"+oldest.id+" "+ oldest.name);

//-------b)--- Create another list having id and name of all the persons above 18 years----//

const adult=people.filter((i)=>{
    if(i.age > 18){
        return i;
    }
});

const adultans = adult.map((i) => {
    return { id: i.id, name: i.name };
});
console.log("preson above 18");
console.log(adultans);

//----------------c)-- Find the average age------------------//
const totalage = people.reduce((sum, person) =>{
        sum=sum+person.age;
        return sum;
},0);
console.log("Avg-->"+(totalage/people.length));

//---------------d) Create 2 list with names starting with only ‘A’ and ‘R’ respectively------//
const Aname=people.filter((i) => {
    let char = i.name[0];
    if(char==='A'){
        return i;
    }
});
console.log("Name Start With A");
console.log(Aname);

const Rname=people.filter((i) => {
    let char = i.name[0];
    if(char==='R'){
        return i;
    }
});
console.log("Name Start With R");
console.log(Rname);