const fs = require('fs')
const book={
    title:'Ego Is A Enemy',
    author:'Ryon Moliday'
}

const bookJson=JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJson)

const dataBuffer=fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())

const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.title)

data.author='pooja'
data.title='never exist'
const userJSON=JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)
