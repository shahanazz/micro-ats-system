import express from 'express';
const router = express.Router();

import { scheduleInterview } from '../controllers/scheduleController.js';

router.post('/schedule' , scheduleInterview);
    
export default router;                