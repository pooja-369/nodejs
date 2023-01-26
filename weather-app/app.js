const request=require('postman-request')
const geocode=require('./geocode')
const forcast=require('./forcast')

const url='http://api.weatherstack.com/current?access_key=fde6b3dec7bfc0ba249e23f538a522d4&query=37.77750,-122.41639&units=f '

// request(url,(error,response)=>{
//     const data=JSON.parse(response.body)
//     console.log(data)
//     console.log(data.current)
// })

// request({url:url,json:true},(error,response)=>{
//     // console.log(response.body.current)
//     if(error){
//         console.log("unable to connect to weather service ")
//     }else if(response.body.error){
//        console.log("unable to find location")
//     }else{
//     const feel_like=response.body.current.feelslike
//     const temp=response.body.current.temperature
//     console.log(response.body.current.weather_descriptions[0]+' it is currenty '+temp+" degree out there .it feels like "+feel_like+" degree out there ")
//     }

// })

//getcoding 
//address->lat/long->weather

// const getcodeURL='https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20philadelphia&apiKey=39dc0b404110483d880109c4b9df565a'

// request({url:getcodeURL,json:true},(error,response)=>{
//     if(error){
//         console.log("unable to connect to location services ")
//     }else if(response.body.features.length===0){
//        console.log("unable to find location , try another search")
//     }else{
//     const latitude=response.body.features[0].geometry.coordinates[0]
//     const longitude=response.body.features[0].geometry.coordinates[1]
//     console.log(latitude,longitude)
//     }
// })


geocode('bostan',(error,data)=>{
     if(error){
          return  console.log("error",error)
     }

     forcast(data.latitude,data.longitude, (error, forecastdata) => {
          if(error){
              return console.log('Error', error)
          }
          
          console.log('Data :-', data.location)
          console.log("forecastdata :-",forecastdata)

      })
})
