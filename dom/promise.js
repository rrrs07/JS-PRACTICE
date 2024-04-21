// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     console.log('Promise resolved');
//   }, 5000);

//   reject(new Error('Promise rejected'));
// });

//   myPromise.then((value) => {console.log(value)}, (error) => {console.log("error ocurred")});

//myPromise.catch((error) => {console.log("error ocurred")});

// let myPromise1 = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     console.log('Promise1 resolved');
//   }, 3000);

//   reject(new Error('Promise1 rejected'));
// });

// console.log('first');


// let waada1 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('settimeout started');
//   }, 5000);
//   resolve(true);
// })

// let output = waada1.then(function(){
//   let waada2 = new Promise(function(resolve,reject){
//     setTimeout(() =>{
//       console.log('settimeout started2');
//     },3000)
//       resolve('wadaa2 resolved');
//     });
//     return waada2;
//   })
//   output.then((value) => console.log(value));


//async function myAsyncFunction(){return 7;}

async function utility(){

  let Delhi = new Promise((resolve, reject) => {
    setTimeout(() => resolve("too hot in Delhi"), 2000);
  });

  let Mumbai = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Moderate temperature"), 5000);
  });
  
  let dm = await Delhi; // to wait for the promise to resolve
  let mm = await Mumbai;

  return [dm, mm];  

}

