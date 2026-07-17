import express from 'express';
import { 
    getCandidates,
    updateCandidateStatus,
} from '../controllers/candidateController.js';   
  
const router = express.Router();

router.get('/' , getCandidates );
router.patch('/:id/status', updateCandidateStatus)

export default router;