// async function

function findSum(n){
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans +=i;;
        
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
console.log("Hi");
  

//here in output first  Hi will be printed and then the sum because in async function it does wait for the execution rather it passed to the next to execute