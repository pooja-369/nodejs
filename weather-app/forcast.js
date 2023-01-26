const request=require('postman-request')

const forcast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=fde6b3dec7bfc0ba249e23f538a522d4&query='+latitude+','+longitude+'&units=f '
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to location services',undefined)
        }else if(response.body.error){
            callback('unable to find location , try another search',undefined)
        }else{
           callback(undefined,response.body.current.weather_descriptions[0]+' it is currenty '+response.body.current.temperature+" degree out there ")
        }
    })
    
}

module.exports=forcast