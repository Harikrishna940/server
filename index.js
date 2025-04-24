import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.get('/',(req,res)=>{
    res.json({message:"message from backend"})
})

app.listen(3000,()=>{console.log("running sucessfully")
})