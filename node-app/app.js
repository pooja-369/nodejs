const fs=require('fs')
const load =require('./utils')
const yargs=require('yargs')
const notes = require('./note.js')


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
            demandOption:true,   //for compulory 
            type:'string'   //value will be boolean by default
        },
        body:{
            describe:'note a body',
            demandOption:true,
            type:'string'
        },
 
    },
    handler(argv){
        // console.log('adding a new note !',argv)
        // console.log('title :'+argv.title)
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command 

yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
       title:{
        describe:'note title',
        demandOption:true,
        type:'string'
       }
    },
    handler(argv){
        notes.removeNote(argv.title)
        console.log('removing a note !')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNote()
        // console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        notes.readNote
        console.log('Reading a note')
    }
})


// yargs.parse()
console.log(yargs.argv) 
//must be after otherwise handler didn't run 


