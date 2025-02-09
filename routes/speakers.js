import express from "express";

const router = express.Router();

router.get('/', (req, res) => { // Use '/' instead of '/speakers'
    res.send("Speaker list");
});
router.get('/:shortname', (req, res) => { // Use '/' instead of '/speakers'
    res.send(`Speaker with id is ${req.params.shortname}`);
});

export default router;
