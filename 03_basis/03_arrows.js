const user = {
    username: "sagar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// console.log();

// user.welcomeMessage()
// user.username = "New"
// user.welcomeMessage()
// console.log(this);

// function chai(params) {
//     let username = "test"
//     console.log(this.username);    
// }
// chai()

// const chai = function (params) {
//     let username = "test"
//     console.log(this.username);   
// }
const chai = () => {
    let username = "test"
    console.log(this);   
}
// chai()

// const arrowFunc = (num1, num2) => {
//     return num1 + num2
// }

// const arrowFunc = (num1, num2) => num1 + num2
// const arrowFunc = (num1, num2) => (num1 + num2)

const arrowFunc = (num1, num2) => ({username: "sagar"})

console.log(arrowFunc(3,4))

// const myArr = [1,3,4,5,6,7,7]
// myArr.forEach()
