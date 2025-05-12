// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
myMap.set('IN', "India")
// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);    
}