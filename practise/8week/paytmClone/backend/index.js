const express = require("express")
const router = require("./routes/index")
const app = express()
const PORT = 3000
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/api/v1", router)


app.listen(3000, ()=>{
  // console.log("Paytm backend server is up and running on PORT:"+PORT)
  // console.log(`http://localhost:${PORT}`)
  return `Server is up and running`
})