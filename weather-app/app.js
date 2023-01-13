const request=require('postman-request')

const url='http://api.weatherstack.com/current?access_key=fde6b3dec7bfc0ba249e23f538a522d4&query=37.77750,-122.41639'

request(url,(error,response)=>{
    const data=JSON.parse(response.body)
    console.log(data.current)
})