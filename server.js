const express = require("express")
const app = express()
app.get("/", async(req,res)=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok){
            throw new Error("network response wa not ok")
        }
        const todo = await response.json()
        res.json(todo)
    }
    catch(err){
        res.status(501).json({err: err.message })
    }
})


const PORT= 5001
app.listen(PORT, ()=> console.log("my server is running on port",PORT))