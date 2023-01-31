const request=require('postman-request')

const geocode=(address,callback)=>{
    const URL='https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20'+encodeURIComponent(address)+'&apiKey=39dc0b404110483d880109c4b9df565a'
    request({url:URL,json:true},(error,response)=>{
       if(error){
        callback('unable to connect to location services',undefined)
       }else if(response.body.features.length===0){
        callback('unable to find location , try another search',undefined)
       }else{
           callback(undefined,{
                latitude :response.body.features[0].geometry.coordinates[1],
                longitude:response.body.features[0].geometry.coordinates[0],
                location:response.body.features.timezone
           })
       }
    })

}




module.exports=geocode