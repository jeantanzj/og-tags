const index = 'prod.html'
const port = 8091
const express = require('express')
const app = express()
const path = require('path')
app.get('/', (req,res)=>{
    return res.sendFile(path.join(process.cwd(),index))
})
app.get('/banner.png',(req,res)=>{
    return res.sendFile(path.join(process.cwd(),'banner.png'))
})
app.listen(port, function(err) {
    if(err){
        console.error(index + ': Error listening at port ' + port)
        return
    }
})