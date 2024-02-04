const express=require("express")
const cors = require("cors")
const app =express()
const router = require("./router/StdRouter")
const mongoose = require("mongoose")
const PORT=4000



app.use(express.json())
app.use(cors())

app.use("/std",router)//http://localhost:4000/std

app.listen(PORT,()=>
{
    mongoose.connect("mongodb+srv://admin:admin@app1.iuoztqc.mongodb.net")
    .then(()=>
    {
        console.log("Server Started PORT Number : "+PORT)
        console.log("Database Connected")
    })
    .catch((err)=>
    {
        console.log("Error : "+err)
    })
   
})