const name = "sagar"
const repoCount = 25

// console.log(name + repoCount + "value");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sagar')
// console.log(gameName[0]);
// console.log(gameName[0].__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
// console.log(gameName.blink());

const newSting = gameName.substring(0,3)
console.log('substring:', newSting);

const newSlice = gameName.slice(-5,4) // start with reverse
console.log('newSlice:', newSlice);