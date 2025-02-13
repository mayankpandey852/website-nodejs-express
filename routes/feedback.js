// import express from "express";

// const router = express.Router();

// router.get('/', async (req, res) => { // Use '/' instead of '/speakers'
// res.send("feedbak page")
// });
// router.post('/', (req, res) => { // Use '/' instead of '/speakers'
//     res.send("feedbak sent done");
// });

// export default router;




import { resolveTxt } from "dns";
import express from "express";

export default function feedbackRoutes(feedbackService) {
    const router = express.Router();

    router.get("/", async (req, res,next) => {
        try {
            const feedback=await feedbackService.getList()
          return res.render('layout', { pageTitle: "feedback", template:'feedback',feedback})
        } catch (error) {
            return next(error)
            
        }
    });

    return router;
}
