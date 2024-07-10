function myCallback(someNumber) {
  return someNumber * 2;
}

function mainFunction(randomNumber,shouldCall, callback){
    let result = randomNumber; // in this ex result === 5

    //in this ex , shouldCall is 'true', so we do reach the callback
    if(shouldCall){
        // in this ex,'callback' represents 'myCallback' from above
        result = callback(randomNumber);
    }
    //since 'result' was re-assigned by the callback function,returns 10
    return result;

}
mainFunction(5, true, myCallback); // 10


// another example
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSquares(a,b){
    const val1= square(a);
    const val2= square(b);
    
    return val1 + val2;
}
function sumOfCube(a,b,fn){
    const val1= fn(a);
    const val2= fn(b);
    
    return val1 + val2;
}
const ans = sumOfSomething(a,b,square);
console.log(ans);