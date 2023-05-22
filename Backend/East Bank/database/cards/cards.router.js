import { createCard } from "./cards.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/',  );

// Endpoint POST
router.post('/createcard', createCard );

// Endpoint PATCH
router.patch('/',  );

// Endpoint DELETE
router.delete('/',  );

export default router;