const index = 'ndp.html'
const port = 8093
const express = require('express')
const path = require('path')
const app = express()
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