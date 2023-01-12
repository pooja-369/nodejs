const fs=require('fs')
const chalk = require('chalk')

const getNotes=()=>{
  return 'your notes....'
}

const addNote=(title, body)=>{
    const notes=loadNotes()
    // const duplicatesNotes=notes.filter(function(note){
    //     return note.title===title
    // })
    const duplicatesNotes=notes.filter((note)=> note.title===title)

    if(duplicatesNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    //     saveNotes(notes)
    //     console.log('new note succesfully added !!')
    // }else{
    //     console.log("note title already taken !!")
    // }


}

const removeNote=(title)=>{
    const notes=loadNotes()
    // const notesToKeep=notes.filter(function(note){
    //     return title!== note.title
    // })
    const notesToKeep=notes.filter((note)=>title!== note.title)
    // saveNotes(notesToKeep)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNote = ()=>{
    const notes=loadNotes()
    console.log(chalk.blue.inverse('your notes'))
   notes.forEach((note)=>{
      console.log(note.title)
   })
 

}

const readNote=()=>{
    
}

const saveNotes=(notes)=>{
   const dataJson=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJson=databuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
       return []
    }

}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}