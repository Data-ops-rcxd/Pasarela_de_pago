import { createCard, deleteCard, getCards, patchCard } from "./cards.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/findcards',  getCards );

// Endpoint POST
router.post('/createcard', createCard );

// Endpoint PATCH
router.patch('/:id',  patchCard );

// Endpoint DELETE
router.delete('/:id', deleteCard );

export default router;