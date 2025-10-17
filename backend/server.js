console.log("Starting server file...");
const express = require('express')

const app = express()

const PORT = 8000

app.get("/",(req,res) => {
    res.send("Hii Welcome..")
})

app.listen(PORT,() => {
    console.log(`Server is running http://localhost:${PORT}`)
})