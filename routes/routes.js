import express from "express";


const router=express.Router()

router.get('/',(req,res)=>{
    res.render('pages/index',{pageTitle:"welcome"})
})

export default router;