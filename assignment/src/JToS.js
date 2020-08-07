const fs = require("fs")

const data = fs.readFileSync("TestJSON.json")

const user  = data.toString()

console.log(user)