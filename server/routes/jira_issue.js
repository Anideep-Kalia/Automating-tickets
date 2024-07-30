const express = require('express');
const router = express.Router();

router.get('/ticket', async (req, res) => {
    try {
        const analysis = await Analysis.find();
        res.json(analysis);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});