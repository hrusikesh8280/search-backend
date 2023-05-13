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





app.listen(7000,async()=>{

    try{
        await connection
        console.log("Server is Connected to Mongoose");
    }catch(err){
        console.log(err);
    }

    console.log("Server is running at 7000")
})
