// import express from "express";

// const router = express.Router();

// router.get('/', (req, res) => { // Use '/' instead of '/speakers'
//     res.send("Speaker list");
// });
// router.get('/:shortname', (req, res) => { // Use '/' instead of '/speakers'
//     res.send(`Speaker with id is ${req.params.shortname}`);
// });

// export default router;





import express from "express";

export default function feedbackRoutes(speakerService) {
    const router = express.Router();
    

    router.get("/", async (req, res,next) => {
        try{
        const speakers = await speakerService.getList();
        const artwork = await speakerService.getAllArtwork();
        return res.render('layout',{pageTitle:"Speakers",template:'speakers',speakers,artwork})
        }
        catch(error){return next(error)}
    });

    router.get('/:shortName',async(req,res,next)=>{
        try{
            const speaker = await speakerService.getSpeaker(req.params.shortName);
            const artwork = await speakerService.getArtworkForSpeaker(req.params.shortName);
          return  res.render('layout',{pageTitle:"Sepakers Detail",template:'speaker-detail',speaker,artwork})
        }
        catch(error){return next(error)}
    
        })

    return router;
}
