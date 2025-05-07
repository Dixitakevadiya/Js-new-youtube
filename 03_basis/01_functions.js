function testfuction(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// testfuction()

// function addTwo(num1,num2){
//     console.log(num1+num2);    
// }

// const result = addTwo(3,4)
// console.log("result", result);

function addTwo(num1,num2){
//    let result = num1+num2
//    return result   
        return  num1+num2
}

const result = addTwo(3,4)
// console.log("result", result);

function loginUsermessage(usename = "test"){
    if(!usename){
        console.log("Please enter user name");
        return
    }
    return `${usename} just logged in`
}
// const login = loginUsermessage("sagar")
// console.log(login);
// console.log(loginUsermessage("sagar"));

function calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,300,4000))

const user = {
    username: "sagar",
    price: 200
}
function handleOBj(anyObject) {
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleOBj(user)
handleOBj({
    username: "test",
    price: 200
})
const mynewarray = [200,400,100,600]

function returnsecval(getarray) {
    return getarray[1]
}

// console.log( returnsecval(mynewarray));
console.log(returnsecval([200,4000,600]));
