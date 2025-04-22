// Primitive Type

// 1. String  // 2. Null // 3. undefined// 4. Number// 5. Boolean// 6. bigint// 7. symbol

const score = 100
const scoreVal = 100.3
const isLoggin = false
const outTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 12364456876876746n


// Non primtive type[reference type]

// 1. array // 2. object// 3. functions

// all non premetive typeof function means object function
 
const test = ["abc","xyz","test"];

let myObj = {
    name: "hitesh",
    age: 25
}

const myFun = function(){
    console.log('my function');
}

// console.log(typeof myObj)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// =================================================
// Stack memory(Primitive), Heap memory (non premetive)

let myYoutube = "testcom"
let anotherName = myYoutube
anotherName = "chaiaurcode"
// console.log(anotherName);
// console.log(myYoutube);

let userOne = {
    email: "user@google.com",
    upi: "user@lbl"
}
let userTwo = userOne

userTwo.email = "test@google.com"
console.log(userOne);
console.log(userTwo);