const http=require('http');
const express=require('express');
const cors=require('cors')
const app=express();
const router=express.Router()
router.get('/home',(req,res,next)=>{
    res.json({message:"yes the home route dsfsdf"})
})
app.use(cors())
app.use('/',router);
const port=process.env.POST || 3000
const server=http.createServer(app);
server.listen(port,()=>{
    console.log("server is ready");
})