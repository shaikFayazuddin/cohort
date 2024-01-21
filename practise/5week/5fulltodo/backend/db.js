//mongoose shcema for the following
/*
    Todo : {
        title : string,
        description: string,
        completed : boolean
    }
 */ 
const mongoose = require("mongoose")
//mongodb+srv://fayazuddin:fayazuddin@cluster0.j93misu.mongodb.net/
mongoose.connect("mongodb+srv://fayazuddin:fayazuddin@cluster0.j93misu.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports={
    todo
}