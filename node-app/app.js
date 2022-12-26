const fs=require('fs')
const load =require('./utils')
const yargs=require('yargs')
fs.writeFileSync('note2.txt','this is the file created by nodejs')
console.log(load.name)
const sum =load(8,2)
console.log(sum)

//command line argument default 
console.log(process.argv)
const command =process.argv[2]
if(command==='add'){
    console.log('adding a note ')
}else if(command==='remove'){
    console.log('reomving a note')
}

//command line argument using yargs

//create add command 
yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,  
            type:'string'
        }
 
    },
    handler:function(argv){
        // console.log('adding a new note !',argv)
        console.log('title :'+argv.title)
    }
})

//create remove command 

yargs.command({
    command:'remove',
    describe:'removing a note',
    handler:function(){
        console.log('removing a note !')
    }
})
// yargs.parse()
console.log(yargs.argv) 
//must be after otherwise handler didn't run 


