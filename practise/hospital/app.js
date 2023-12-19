const express = require("express")

const app = express()

app.use(express.json())

const users = [{
    name:"Fayaz",
    kidneys:[{
        healthy:false
    }]
}]

app.get("/",function(req,res){
    const userKidneys = users[0].kidneys
    const numberOfKidneys = userKidneys.length
    let numberOfHealthyKidneys = 0
    for(let i =0;i<numberOfKidneys;i++){
        if(userKidneys[i].healthy){
            numberOfHealthyKidneys += 1
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/",(req,res)=>{
    const ishealthy = req.body.ishealthy
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done"
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({
        msg:"All Kidneys are healthy now"
    })
})

app.delete("/",(req,res)=>{
    let newKidneys = []
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i])
        }
    }
    users[0].kidneys = newKidneys
    res.json({
        msg:"All the unhealthy kidneys are removed"
    })
})

app.listen(3000)