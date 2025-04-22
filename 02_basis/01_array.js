const myArray = [1,2,3,4,5]
// console.log(myArray[0]);

const mynew2 = new Array(2,"d")
// console.log(mynew2.length);

// Methods of array

// myArray.pop()
// myArray.push()
// myArray.shift()
// myArray.unshift(4)
// console.log(myArray.includes(2));
// console.log(myArray.indexOf(0));

const newArr = myArray.join();

// console.log(typeof myArray);
// console.log(typeof newArr);

//[slice,splice]

console.log("A",myArray);
const myA1 = myArray.slice(1,3);

console.log(myA1);
console.log("B", myArray);

const myA2 = myArray.splice(1,1);
console.log("c", myArray);
console.log(myA2);