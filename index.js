const express = require("express")
const dotenv = require("dotenv")
const { connection } = require("./Connection/db")
const { adRouter } = require("./routes/Ad.routes")
const cors = require("cors")
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())
app.use("/",adRouter)


app.get("/",(req,res)=>{
    res.send("welcome to search backend")
})


app.listen(process.env.port,async()=>{

    try{
        await connection
        console.log("Server is Connected to Mongoose");
    }catch(err){
        console.log(err);
    }

    console.log(`Server is running at ${process.env.port}`)
})
