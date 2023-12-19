const express = require('express')
const router = express.Router()

const getContacts = (req, res) => {
    res.status(200).json({ message: "get all Contact." })
}
const getContactsById = (req, res) => {
    res.status(200).json({ message: `Get contact for. ${req.params.id}` })
}

const postContacts = (req, res) => {
    res.status(200).json({ message: "Create Contact." })
}

const putContacts = (req, res) => {
    res.status(200).json({ message: `update contact for. ${req.params.id}` })
}

const deleteContacts = (req, res) => {
    res.status(200).json({ message: `Delete contact for. ${req.params.id}` })
}



module.exports = { router, getContacts, getContactsById, postContacts, putContacts, deleteContacts }