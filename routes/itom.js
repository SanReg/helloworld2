const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Hi, this is an API!")
})

router.get('/file',function(req,res){
    res.send("No file found!")
})

module.exports = router

