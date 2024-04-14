function getCount(str) {
    let vowelC = 0;
    
    const arr = str.split("");
    
    for ( let i = 0 ; i<arr.length; i++){
      switch(arr[i] ){
          case 'a':
           vowelC++;
           break;
          case 'e':
           vowelC++;
           break;
          case 'i':
           vowelC++;
           break;
          case 'o':
           vowelC++;
           break;
          case 'u':
           vowelC++;
           break;
  }
    }
    return vowelC;
    
  }