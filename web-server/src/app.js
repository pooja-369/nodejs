const express = require('express')
const path=require('path')

console.log(path.join(__dirname,'../public'))
const app = express()
//app.com
//app.com/help
//app.com/about

//setting up server using app.get 
const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))
// app.get('',(req,res)=>{
//      res.send('hello this is express')
// })

// app.get('/help',(req,res)=>{
//     // res.send('help page')
//     res.send(
//         [{name:'pooja'}
// ,{
//      age:27  
// }])
// })

// app.get('/about',(re,res)=>{
//     res.send('ABOUT PAGE')
// })

app.get('/weather',(re,res)=>{
    res.send({
        forcast:"it is snowing",
        location:'bawana '
    })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})