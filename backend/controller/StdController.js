const StdSchema = require("../model/StdModel")

const addStd = async (req, res) => {
     try {
          const { username, mail, password } = req.body
          const result = await StdSchema.create({ username, mail, password })
          res.status(200).json({ msg: "Data Saved", data: result })
     }
     catch {
          res.status(500).json({ msg: "Data Not Saved" })
     }

}

const editStd = async (req, res) => {
     try {
          const { username, mail, password } = req.body

          const result = await StdSchema.updateOne({ username }, { mail, password })
          res.status(200).json({ msg: "Data Edit Successfully", data: result })
     }
     catch {
          res.status(500).json({ msg: "Data Not Edit" })
     }

}

const deleteStd = async (req, res) => {
     try {
          
          const {username} = req.body
          const result = await StdSchema.deleteOne({ username })
          res.status(200).json({ msg: "Data Deleted", data: result })
     }
     catch {
          res.status(500).json({ msg: "Data Not Delete" })
     }

}



const findStd = async (req, res) => {
     try {
          const result = await StdSchema.find({})
          res.status(200).json(result)
     }
     catch {
          res.status(500).json({ msg: "Data Not Delete" })
     }

}


module.exports = { addStd, editStd, deleteStd, findStd }