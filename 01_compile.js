let solc = require('solc')
let fs = require('fs')

let contractCode = fs.readFileSync('./contract/SimpleStorage.sol', 'utf-8')
console.log("contractCode:",contractCode)
let output = solc.compile(contractCode, 1)
console.log(output)