import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app=express();
const PORT=3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'./static')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/index.html'))
})
app.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'))
})
app.get('/feedback',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/feedback.html'))
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})