import express from 'express';
import fitnessDataRoutes from './fitnessData';

const router = express.Router();

router.use('/api/fitness-data', fitnessDataRoutes);

export default router; 