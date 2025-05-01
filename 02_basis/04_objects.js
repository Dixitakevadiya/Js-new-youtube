//1 singleton

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123fsdgfgh"
tinderUser.name = "sagar"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "test@gmail",
    fullName: {
        userfullname: {
            firstName: "sagar",
            lastName: "Goyani"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const ob1 = {1: "a",2: "b"}
const ob4 = {5: "a",6: "b"}
const ob2 = {3: "a",4: "b"}

// const ob3 = {ob1,ob2}
// const ob3 = Object.assign({},ob1,ob2,ob4)

const ob3 ={...ob1,...ob2,...ob4}

// console.log(ob3);

const users =[
    {
        name: "sagar",
        age: 34
    },
    {
        name: "sagar",
        age: 34
    },
    {
        name: "sagar",
        age: 34
    },
    {
        name: "sagar",
        age: 34
    }
]

users[1].name
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// const {email} = regularUser

// console.log(email)
const course = {
    courseName: "test",
    price: "999",
    courseTeach: "sagar"
}
// console.log(course.courseTeach);
const {courseTeach: nickname} = course
console.log(nickname);

// {
//     "courseNam"e: "test",
//     "price": "999",
//     "courseTeach": "sagar"
// }