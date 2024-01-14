score=300
console.log(typeof score)
const n = new Number(100.48999)
let p = n.toString()
console.log(n)
console.log(p.length)
console.log(n.toFixed(2))
console.log(n.toPrecision(4))

const hundreds = 100000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-65))
console.log(Math.round(3.4567))
console.log(Math.ceil(4.0001))
console.log(Math.floor(1.9999))

console.log(Math.random())
let random = Math.random()*10 + 1
console.log(Math.round(random))