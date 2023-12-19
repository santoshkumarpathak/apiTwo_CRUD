const express = require('express')
const { getContacts, postContacts, getContactsById, putContacts, deleteContacts } = require('../controller/contactController')
const router = express.Router()
// const { getContacts, getContactsById, postContacts, putContacts, deleteContacts } = require('../controller')


router.route("/").get(getContacts)
router.route("/").post(postContacts)
router.route("/:id").get(getContactsById)
router.route("/:id").put(putContacts)
router.route("/:id").delete(deleteContacts)

// const getContacts = (req, res) => {
//     res.status(200).json({ message: "get all Contact." })
// }

// const getContactsById = (req, res) => {
//     res.status(200).json({ message: `Get contact for. ${req.params.id}` })
// }

// const postContacts = (req, res) => {
//     res.status(200).json({ message: "Create Contact." })
// }

// const putContacts = (req, res) => {
//     res.status(200).json({ message: `update contact for. ${req.params.id}` })
// }

// const deleteContacts = (req, res) => {
//     res.status(200).json({ message: `Delete contact for. ${req.params.id}` })
// }



// module.exports = { router, getContacts, getContactsById, postContacts, putContacts, deleteContacts }
module.exports = { router }