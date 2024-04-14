class SmallestIntegerFinder {
    findSmallestInt(arrOfNum) {
      let min;
      for (let i = 0; i<arrOfNum.length; i++){
        
        
        const arrNum = arrOfNum[i];
        if(i === 0){
           min = arrNum;
        }
        if(arrNum < min){
           min = arrNum;
        }
      }
      return min;
    }
  }