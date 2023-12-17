const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT|| 5002



app.listen(port , ()=>{
    console.log(`server listing port is ${port}`)
})