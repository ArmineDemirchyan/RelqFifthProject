import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/users.js";

const app = express()
const PORT = 5000
app.use(bodyParser.json())
app.use('/users' , UserRouter)

app.get('/', (req,res)=>{
    res.send("Hello World!")
})
app.listen(PORT, function(){
    console.log(`Hey server is running in port ${PORT}`)
})


