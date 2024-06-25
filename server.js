const express = require('express')
const { getContacts, getContactsById, postContacts, putContacts, deleteContacts, router } = require('./route/route')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5002

app.use( "/api/contacts",router)

// app.get("/api/contacts", getContacts)
// app.get("/api/contacts/:id", getContactsById)
// app.post("/api/contacts", postContacts)
// app.put("/api/contacts/:id", putContacts)
// app.delete("/api/contacts/:id", deleteContacts)



app.listen(port, () => {
    console.log(`server listing port is ${port}`)
})