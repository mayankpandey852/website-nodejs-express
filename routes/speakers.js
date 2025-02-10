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
    

    router.get("/", async (req, res) => {
        const speakers = await speakerService.getList();
        res.render('layout',{pageTitle:"Speakers",template:'speakers',speakers})

    });

    router.get('/:shortName',async(req,res)=>{
            const speaker = await speakerService.getSpeaker(req.params.shortName);
            console.log(speaker);
            res.render('layout',{pageTitle:"Sepakers Detail",template:'speaker-detail',speaker})
    })

    return router;
}
