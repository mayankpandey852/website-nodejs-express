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

export default function feedbackRoutes(feedbackService) {
    const router = express.Router();

    router.get("/", async (req, res) => {
        try {
            const feedbackList = await feedbackService.getList();
            res.json(feedbackList); // Send JSON response
        } catch (error) {
            res.status(500).json({ error: "Failed to load feedback data" });
        }
    });

    return router;
}
