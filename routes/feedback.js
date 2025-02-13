// import express from "express";

// const router = express.Router();

// router.get('/', async (req, res) => { // Use '/' instead of '/speakers'
// res.send("feedbak page")
// });
// router.post('/', (req, res) => { // Use '/' instead of '/speakers'
//     res.send("feedbak sent done");
// });

// export default router;




import express from "express";

export default function feedbackRoutes(feedbackService) {
    const router = express.Router();

    router.get("/", async (req, res,next) => {
        try {
            const feedbackList = await feedbackService.getList();
            res.json(feedbackList); // Send JSON response
        } catch (error) {
            res.status(500).json({ error: "Failed to load feedback data" });
            return next(error)
        }
    });

    return router;
}
