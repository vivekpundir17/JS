// DATE AND TIME IN JAVASCRIPT
let d = new Date()
console.log(d)
console.log(d.toString())
console.log(d.toTimeString())
console.log(d.toDateString())
console.log(d.toLocaleString())
console.log(d.toLocaleTimeString())

let mydate = new Date(2023,2,28,5,3,25)
console.log(mydate.toLocaleString())
console.log(mydate.getMonth())

let myd= new Date("01-14-2024")
console.log(myd.toLocaleString())
console.log(myd.getTime())
console.log(myd.getDate())

let timestamp = Date.now()
console.log(timestamp)

let dates  = new Date()
dates.toLocaleString('default',{
    weekday: "long"              }
    )