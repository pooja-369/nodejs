const fs=require('fs')


const getNotes=function(){
  return 'your notes....'
}

const addNote=function(title, body){
    const notes=loadNotes()
    const duplicatesNotes=notes.filter(function(note){
        return note.title===title
    })

    if(duplicatesNotes.lenghth===0){
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)
        console.log('new note succesfully added !!')
    }else{
        console.log("note title already taken !!")
    }


}

const saveNotes=function(notes){
   const dataJson=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=function(){
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
    addNote:addNote
}