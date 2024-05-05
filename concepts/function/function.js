// named function assignment
let add = function sum(a, b) {
    console.log(a + b);
}



// anonumous function assignment
let adds = function () {
   console.log('walking');
}



// this will sum all the values passed irrespective of the no. of paratmeters in function
function sum(a,b){
    let total = 0;
    for(let value of arguments)
    total += value;
return total;
}

let ans = sum(1,2,3,4,5,6,7,8,9,10);
console.log(ans);