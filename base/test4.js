//STACK - PRIMITIVE

let name = "vivek"
let num = name
console.log(num)
 num = "vivek pundir"
console.log(num);


//HEAP - NON PRIMITIVE

let n ={
    mail: "abc",
    p: 9891,
}
let m = n;

m.mail="xyz"

console.log(n.p)
console.log(m.p)
console.log(m.mail)
console.log(n.mail)