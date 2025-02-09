import express from "express";
import speakerRoutes from './speakers.js'
import feedbackRoutes from './feedback.js'

const router=express.Router()

router.get('/',(req,res)=>{
    res.render('pages/index',{pageTitle:"welcome"})
})

router.use('/speakers',speakerRoutes)
router.use('/feedback',feedbackRoutes)

export default router;