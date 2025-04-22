let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())



myDate.toLocaleString('Default',{
    weekday: "long",
    timeZone: "IST"
})

console.log(myDate)