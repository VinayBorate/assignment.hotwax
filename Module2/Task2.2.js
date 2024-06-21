// Identify the difference between regular functions and arrow functions

/*
1) Syntax of Regular Function  ->

   let x = function function_name(parameters){
   // body of the function
  }; 

   Ex -
   let x = function function_name(parameters){
   // body of the function
  };


  Syntax of Arrow function.

  let x = (parameters) => {
    // body of the function
};

  Ex- 
     var square = (x) => {
        return (x*x);
    };
    console.log(square(9));


2)Regular Function: The value of this depends on how the function is called. It can be bound 
  dynamically at runtime.

  const obj = {
  value: 10,
  regularFunction: function() {
    console.log(this.value);
  }
};
obj.regularFunction(); // 10


  Arrow Function: Arrow functions do not have their own this context; they inherit this from the parent 
  scope at the time they are defined.

  const obj = {
  value: 10,
  arrowFunction: () => {
    console.log(this.value);
  }
};
obj.arrowFunction(); // undefined (or the value from the outer scope)


3)  Regular Function: Regular functions have access to the arguments object, which is an array-like 
    object containing all arguments passed to the function.

    function myFunction() {
  console.log(arguments);
}
myFunction(1, 2, 3); // [1, 2, 3]


 Arrow Function: Arrow functions do not have their own arguments object. If needed, you can use rest 
 parameters instead.

 const myFunction = (...args) => {
  console.log(args);
};
myFunction(1, 2, 3); // [1, 2, 3]


4)   Regular functions can be used as constructors with the new operator to create instances of objects.
      
             function Person(name) {
       this.name = name;
        }
    const person = new Person('Alice');
    console.log(person.name); // Logs 'Alice'


    Arrow functions cannot be used as constructors and will throw an error if used with the new operator.
    const Person = (name) => {
                this.name = name;
              };
    const person = new Person('Alice'); // Throws an error





*/