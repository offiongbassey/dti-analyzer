import express from 'express';
import analyser from "./analyser";

const router = express.Router();

router.use('/analyser', analyser );

module.exports = router;