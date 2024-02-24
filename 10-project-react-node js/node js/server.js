const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors());
app.use(express.json())
app.post('/api/users',(req,res)=>{
    setTimeout(()=>{
        console.log(req.body)
        res.send(req.body)
        console.log(req.body.name+"   your are the best")
    },1500)
})
app.listen('5000',()=>{
    console.log('server reunning on port 5000')
})