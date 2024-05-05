const strArr = ['a', 'b', 'c', 'd', 'e'];
strArr.join(""); 
 console.log(strArr); 

const arr = ["hello", "world", "how", "are", "you"];
arr.map(itemFromArr => itemFromArr[0]);
// getting the first element ----- ["h", "w", "h", "a", "y"]
  console.log(arr.map(itemFromArr => itemFromArr[0]));

  //unshift---- add element at the beginning

// splice---- insert elements in between
const arr1 = ["hello", "world", "how", "are", "you"];
arr1.splice(2, 0, "I", "am");
 console.log(arr1); // ["hello", "world", "I", "am", "how", "are", "you"]

 // search for an element in an array also used to remove from middle
 console.log(arr1.indexOf("world")); // 1

 console.log(arr1.includes("world")); // true


let courses = [
    {no: 1, naam: 'JavaScript'},
    {no: 2, naam: 'Python'},
];



let course1 = courses.find(function(course1){
    return course1.naam == 'Python';
})
console.log(course1);


//emptying an array methods
let array = [1, 2, 3, 4, 5];
// array.length = 0; // []

array.splice(0,array.length)
console.log(array); // []