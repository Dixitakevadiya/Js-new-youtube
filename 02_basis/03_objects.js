//1 singleton
// Object.create


//object literals
const mysym = Symbol("key1")
const JsUser = {
    name: "sagar",
    "fullName": "Sagar Goyani",
    [mysym]: "mykey1",
    age: 25,
    location: "surat",
    email: "test@gmail.com",
    isLoggedin: false,
    
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "test123@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "test123456@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("gello");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user ${this.name}`);    
    console.log(`Hello Js user ${this[mysym]}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


