setTimeout(()=>{
    console.log("two second are up")
},2000)

const names=['andrew','jen','jess']
const shortCodes=names.filter((name)=>{
       return name.length <= 4
})

console.log(shortCodes)

const getcode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0
        }
    
        return callback(data)
    })
}

getcode("philadelphia",(data)=>{
    console.log(data)
})

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

const c=4
const d=5

add(c,d,(sum)=>{
   console.log(sum)  //should print:5
})
