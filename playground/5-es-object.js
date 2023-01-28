//object property shorthand 
const name2 = "goyal"
const userAge=27

const user={
    name:name2,
    age:userAge,
    location:'philadelphia'
}

console.log(user)

//object destructing -to extract object property and their values into individual variable 

const product={
label:'red notebook',
price:3,
stock:201,
salePrice:undefined,
rating:3
}

// const label=product.label
// const stock=product.stock

const {label:product_label, stock , rating=5 }=product
console.log(product_label,stock,rating)

//rating doesn't give preference to local value it show the value of 3

const transaction = (type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)


