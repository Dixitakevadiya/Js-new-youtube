
const c = 300
if(true){
    let a = 10
    const b = 20
    const c = 30
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(params) {
    const username= "test"
    function two(params) {
        const userwebsite= "test web"
        console.log(username);      
    }
    // console.log(userwebsite);        
    // two()  
}
// one()

if(true){
    const username = "test"
    if(username === 'test'){
         const userwebsite = " test web"
        //  console.log(username + userwebsite);   
    }
    // console.log(userwebsite);    
}
// console.log(username);   
console.log(addone(5))
function addone(num) {
    return num + 1
}

// addtwo(5)
const addtwo = function(num) {
    return num + 2
}

console.log(addtwo(5))