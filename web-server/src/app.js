const express = require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/forcast')
const forcast=require('./utils/geocode')


// console.log(path.join(__dirname,'../public'))
const app = express()

//define the paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')

///setup static directory to serve
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        name:'andrew mead'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about ',
        name:'goyal'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title:"help",
        name:'andrew'
    })
})

app.get('/footer',(req,res)=>{
    res.render('footer',{
        title:'footer ',
        name:'goyal'
    })
})
//setting up server using app.get 

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

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an address'
        })
    }
    // res.send({
    //     forcast:'it is snowing',
    //     location:"jammu kashmir ",
    //     address:req.query.address
    // })
    geocode(req.query.address,(error,{latitude,longitude,location})=>{
       if(error){
         return res.send({error})
       }
       forcast(latitude,longitude,(error,forcastData)=>{
        if(error){
            return res.send({error})
          }
          res.send({
            forcast:forcastData,
            location,
            address:req.query.address
          })
       })
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            errot:"you must provide a search term"
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
     res.render('404',{
        title:'404 help',
        name:'pooja',
        errorMessage:"help article not found"

     })
})

app.get('*',(req,res)=>{
      res.render('404',{
        title:'404',
        name:'pooja',
        errorMessage:"page not found"
      })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})