const express = require('express')
const app = express()
const port = 1391


const itom = require('./routes/itom.js')
app.use('/api',itom)

app.get('/',function(req,res){
    res.sendFile(__dirname + '/fileho.html')
    //res.download(__dirname + '/fileho.html')
})

app.get('/kiran/',function(req,res){
    res.sendFile(__dirname + '/kiran.html')
    //res.download(__dirname + '/fileho.html')
})

app.listen(port,function(){
    console.log(`You are listening on the port on ${port}`)
})