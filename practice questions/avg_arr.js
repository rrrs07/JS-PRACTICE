function getAverage(marksArr){
    const count = marksArr.length;
    let sum = 0;
    for (let i = 0 ; i< count ; i++){
      sum = sum + marksArr[i]
    }
    return Math.floor(sum/count);
  }