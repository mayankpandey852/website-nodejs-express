// import express from 'express'
// import path from 'path'
// import {fileURLToPath} from 'url'
// import router from './routes/routes.js'
// import FeedbackService from './services/FeedbackService.js'
// import SpeakerService from './services/SpeakerService.js'

// const feedbackService=new FeedbackService('./data/feedback.json');
// const speakerService=new SpeakerService('./data/speakers.json');

// const app=express();

// const PORT=3000;

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'./views'))

// app.use(express.static(path.join(__dirname,'./static')))


// app.use('/',router({
//     feedbackService,
//     speakerService,
// }))

// app.listen(PORT,()=>{
//     console.log(`Server running on ${PORT}`);
    
// })



import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import createRouter from "./routes/routes.js"; // Make sure it's a function
import FeedbackService from "./services/FeedbackService.js";
import SpeakerService from "./services/SpeakerService.js";
import createError from 'http-errors';
import cokkieSession from 'cookie-session'
const feedbackService = new FeedbackService("./data/feedback.json");
const speakerService = new SpeakerService("./data/speakers.json");

const app = express();
const PORT = 3000;

app.set('trust proxy',1);

app.use(cokkieSession(
    {
        name:"session",
        keys:["HJDD48FY&^%$","modw57HHNFS"]
    }
));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));
app.locals.siteName ="Roux Meetups"

app.use(async (req,res,next)=>{
try {
    const names = await speakerService.getNames();
    res.locals.speakerNames=names;
    return next();
    
} catch (error) {
    return next(error);
}

})


// ✅ Correctly pass dependencies to the router function
app.use(
    "/",
    createRouter({
        feedbackService,
        speakerService,
    })
);

app.use((req,res,next)=>{
    return next(createError(404,'file not found'))
})

app.use((err,req,res,next)=>{
res.locals.message=err.message;
    const status=err.status||500;
    res.locals.status=status;
    res.status(status);
    res.render('error')
 
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
