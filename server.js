const express = require('express')
const { getContacts, getContactsById, postContacts, putContacts, deleteContacts } = require('./route/route')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5002


app.get("/api/contacts", getContacts)
app.get("/api/contacts/:id", getContactsById)
app.post("/api/contacts", postContacts)
app.put("/api/contacts/:id", putContacts)
app.delete("/api/contacts/:id", deleteContacts)

// app.get("/api/contacts",(req,res)=>{
//  res.status(200).json({message:"Get all contact"})
// })

// app.get("/api/contacts/:id",(req,res)=>{
//     res.status(200).json({message:`Get contact for. ${req.params.id}`})
// })

// app.post("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Create successfull."})
// })


// app.put("/api/contacts/:id", (req, res) => {
//     res.status(200).json({ message: `Update for ${req.params.id}` });
// });

// app.delete("/api/contacts/:id",(req,res)=>{
//     res.status(200).json({message:`Delete for ${req.params.id}`})
// })


app.listen(port, () => {
    console.log(`server listing port is ${port}`)
})