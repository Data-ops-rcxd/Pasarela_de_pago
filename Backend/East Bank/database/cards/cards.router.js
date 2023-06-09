import { createCard, deleteCard, getCards, patchCard } from "./cards.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/findcards/:name', getCards );

// Endpoint POST
router.post('/createcard', createCard );

// Endpoint PATCH
router.patch('/updatecard/:id',  patchCard );

// Endpoint DELETE
router.delete('/:id', deleteCard );

export default router;