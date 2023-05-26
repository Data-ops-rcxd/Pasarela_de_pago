import { createTransaction, getTransaction } from "./transactions.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.post('/ctran',  createTransaction );

// Endpoint POST
router.get('/ftran', getTransaction );

export default router;