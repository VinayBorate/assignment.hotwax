//Implement 2 event listener on click event of which one executes on bubbling and while other on capture

let myevent1 = document.querySelector('.hero');
// console.log(myevent1);

myevent1.addEventListener('click',function(){ // by default events occure at BUBBLING Phase
    myevent1.style.cssText='color : green';
    console.log("Bubbling Phase");
});

let myevent2=document.querySelector('.seen');
// console.log(myevent2);

myevent2.addEventListener('click',function(){
    myevent2.style.cssText='color : red';
    console.log("Capture Phase");
},true);





//--------------FLOW OF PHASES-----------------------//

//--------------BUBBLING PHASE-----------------------//
// let wrapp = document.querySelector('.wrapper');
// wrapp.addEventListener('click',function(){
//     console.log('11111');
// });

// let cont = document.querySelector('.container');
// wrapp.addEventListener('click',function(){
//     console.log('222222');
// });

// let ch = document.querySelector('.child');
// ch.addEventListener('click',function(){
//     console.log('33333');
// });

// 33333
// 22222
// 11111

//------------------CAPTURE PHASE----------------//
// let wrapp = document.querySelector('.wrapper');
// wrapp.addEventListener('click',function(){
//     console.log('11111');
// },true);

// let cont = document.querySelector('.container');
// wrapp.addEventListener('click',function(){
//     console.log('222222');
// },true);

// let ch = document.querySelector('.child');
// ch.addEventListener('click',function(){
//     console.log('33333');
// },true);

//11111
//22222
//33333


