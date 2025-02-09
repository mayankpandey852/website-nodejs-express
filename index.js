import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import router from './routes/routes.js'
const app=express();
const PORT=3000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./static')))


app.use('/',router)

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})