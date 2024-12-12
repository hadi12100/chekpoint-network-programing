const express = require("express")
const app = express()
const axios = require("axios")
app.get("/", async(req,res)=>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        res.json(response.data)
    }
    catch(error){
        res.status(500).json({error: error.message })
    }
})









const PORT = 5000
app.listen(PORT,()=>console.log("my server is running on port",PORT))