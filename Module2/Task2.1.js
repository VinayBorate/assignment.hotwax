/*  Find the difference between Object and Map    

1) Creating Object --> two ways 
        a) Object Literals.  
          let obj={
          name : "Vinay",
          age : 21 
           }
        b) Constructor Functions.
         finction Rectangle(len,bre){
         this.length=len;
         this.breadth=bre;
         }

         let Obj=new Rectangle();

    Creating Map --->
     let map1 =new map();

2) Object: The ordering of keys is not guaranteed and can vary, especially with integer-like keys.
     const obj = { '2': 'two', '1': 'one' };
     console.log(Object.keys(obj)); // ['1', '2']

        Map: Keys are ordered by the order of their insertion.
     const map = new Map();
     map.set('1', 'one');
     map.set('2', 'two');
     console.log([...map.keys()]); // ['1', '2']


3) Object: Iteration over keys can be done using for...in loop, Object.keys(), Object.values(), or Object.
   entries(). These methods do not guarantee the insertion order (except for Object.entries()).\
   
        const obj = { 'a': 1, 'b': 2 };
     for (let key in obj) {
     console.log(key); // 'a', 'b'
       }

       Map: Provides methods specifically designed for iteration such as map.keys(), map.values(), and map.
       entries(), which preserve the insertion order.

       const map = new Map();
          map.set('a', 1);
          map.set('b', 2);
       for (let [key, value] of map.entries()) {
       console.log(key, value); // 'a' 1, 'b' 2
        }


4) A Map does not contain any keys by default. It only contains what is explicitly put into it.
   An Object has a prototype, so it contains default keys that could collide with your own keys 
   if you're not careful.
   
5) A Map's keys can be any value (including functions, objects, or any primitive).
   The keys of an Object must be either a String or a Symbol.

6) The number of items in a Map is easily retrieved from its size property.
  Determining the number of items in an Object is more roundabout and less efficient. 

7) A Map is an iterable, so it can be directly iterated.
   Object does not implement an iteration protocol, and so objects are not directly iterable using the 
   JavaScript for...of statement (by default).

8) Performs better in scenarios involving frequent additions and removals of key-value pairs.
   Not optimized for frequent additions and removals of key-value pairs.


*/