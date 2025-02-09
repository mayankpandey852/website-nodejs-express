import express from "express";

const router = express.Router();

router.get('/', (req, res) => { // Use '/' instead of '/speakers'
    res.send("feedbak list");
});
router.post('/', (req, res) => { // Use '/' instead of '/speakers'
    res.send("feedbak sent done");
});

export default router;
