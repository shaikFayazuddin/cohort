const express = require("express")
const app = express()

const { createTodo } = require('./types.js')
const { updateTodo } = require('./types.js')
const { todo } = require('./db.js')

const cors = require("cors")
app.use(cors())

app.use(express.json())

app.post("/todo",async function(req,res){
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong Inputs"
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createTodo.description,
        completed: false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find()
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const createPayload = req.body
    const parsePayload = updateTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong Inputs"
        })
        return
    }
    
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg:"Todo markes as completed"
    })
})

app.listen(3000)

