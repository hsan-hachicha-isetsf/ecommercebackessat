const express = require('express');
const router = express.Router();
const Scategorie=require("../models/scategorie")

router.get('/', async (req, res )=> {
    try {
    const scat = await Scategorie.find({}, null, {sort: {'_id': -1}})
    res.status(200).json(scat);
} catch (error) {
res.status(404).json({ message: error.message });
}
});


module.exports = router;