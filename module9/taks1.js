// Implement a simple code to use a Promise


//-------------------------------------------------------------------------//
// let mypromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//             console.log("I am inside mypromise");
//     },5000);
//     resolve(12345678);     
//     reject(new Error('Error a gaya'));
// });

// mypromise1.then((val)=>{
//     console.log(val);
// });

//-------------------------------------------------------------------------//
// let mypromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//             console.log("I am inside mypromise");
//     },5000);    
//     reject(new Error('Error a gaya'));
// });

// mypromise2.then((val)=>{
//     console.log(val);
// });
// mypromise2.catch(function(err){
//     console.log("Recived an Error");
// });

//------------------------------------------------------------------------//

// let wada1 =new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('settimeout 1');
//     },2000);
//     resolve(true);
// })

// let out = wada1.then(()=>{
//     let wada2 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('settimeout 2');
//         },3000);
//         resolve("wada 2 resolve");
//     });
//     return wada2;
// });

// out.then((val) => {
//     console.log(val);
// })


//******************************************************************************************************//
//Implement code to handle multiple promises. You have to fetch information of 5 different products from API

async function mypromices(){
  //  debugger                                 //prefer using async function for chaning the promices
    let indore = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am in Indore");
            resolve("I am in Indore");
        },5000);
    });
     
   let ujjain =new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("I am in Ujjain");
        resolve("I am in Ujjain");
       },10000);
   });
   
   let bhopal =new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("I am in Bhopal");
            resolve("I am in Bhopal");
         },15000);
   });

//    let ind = await indore;
//    let ujj = await ujjain;
//    let bhp = await bhopal;

//    console.log(ind);
//    console.log(ujj);
//    console.log(bhp);

}
mypromices();

//-------------------API-------------------------------------//
async function utility(){
    let content =  await fetch('https://fakestoreapi.com/products');
    let output = await content.json();
    console.log(output);

    for(let i=0;i<5;i++){
         console.log(output[i]);
    }

    let arr=output.splice(1,5);
    console.log("using splice methord");
    console.log(arr);

}
utility();



