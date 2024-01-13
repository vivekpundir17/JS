const name = "vivek "
const age = 20
// OLD WAY => console.log(name + age + " value")
console.log(`hello my name is ${name} and my age is ${age}`);

const gamename = new String('PUBG')
console.log(typeof gamename)
console.log(gamename[0]);console.log(gamename[1]);console.log(gamename[2]);console.log(gamename[3]);
console.log(gamename.__proto__);
console.log(gamename.charAt(0))
console.log(gamename.charAt(1)) 
console.log(gamename.charAt(2))
console.log(gamename.charAt(3))
console.log(gamename.length)

let substr = gamename.substring(0,3)
console.log(substr)
let newstr = gamename.slice(1,3)
console.log(newstr)

const p ="    vivekpundir     "
console.log(p)
console.log(p.trim())

const url = "//https:vivek%20pundir-107"
console.log(url.replace('%20','-'))
console.log(url.replace('-','_'))

console.log(url.includes('-'))
console.log(url.includes('_'))
console.log(url.includes('$'))
console.log(url.includes('%'))