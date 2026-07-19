import express from 'express';
const router = express.Router();

import { scheduleInterview, getSchedules } from '../controllers/scheduleController.js';

router.post('/schedule' , scheduleInterview);
router.get('/schedule' ,  getSchedules);
    
export default router;                