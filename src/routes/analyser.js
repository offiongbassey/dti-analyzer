import express from 'express';
import { analyser } from '../controllers/analyser';
import { dti_analyser } from '../middlewares/validator';
import { validationHandler } from '../helpers/validation';
const router = express.Router();

router.post('/generate', validationHandler(dti_analyser), analyser);

module.exports = router;