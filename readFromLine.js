const readLine = require("readline")
let rl = readLine.createInterface(
    process.stdin,
    process.stdout)
rl.question('Please enter your name: ',(name)=>{
    console.log(`Hello ${name}`)
})