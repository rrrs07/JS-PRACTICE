function myCallback(someNumber) {
  return someNumber * 2;
}

function mainFunction(randomNumber,shouldCall, callback){
    let result = randomNumber;

    if(shouldCall){
        result = callback(randomNumber);
    }
    return result;

}
mainFunction(5, true, myCallback); // 10