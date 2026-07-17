import express from 'express';

const router = express.Router();

import { 
    getInterviwers,
    getInterviwersSchedule,
 } from '../controllers/interviewerController.js';

router.get('/interviewers',  getInterviwers);
router.get('/candidates/:id/status', getInterviwersSchedule);


export default router;