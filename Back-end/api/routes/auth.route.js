import express from 'express';
import { signup } from '../controllers/auth.cotroller.js';

const router = express.Router();

router.post("/signup", signup);

export default router;