import { createTransaction, getTransaction } from "./transactions.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/ctran',  createTransaction );

// Endpoint POST
router.post('/ftran', getTransaction );

export default router;