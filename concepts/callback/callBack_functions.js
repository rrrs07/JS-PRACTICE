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