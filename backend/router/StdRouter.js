const express = require("express")
const { addStd, editStd, deleteStd, findStd } = require("../controller/StdController")

const router =express.Router()

router.post("/add",addStd)
router.put("/edit",editStd)
router.delete("/delete",deleteStd)
router.get("/",findStd)

module.exports=router