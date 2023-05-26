import { createUser, deleteUser, getUserbyID, getUserbyName_pass, patchUser } from "./users.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/:number', getUserbyID );
router.get('/:email/:cdi', getUserbyName_pass );

// Endpoint POST
router.post('/', createUser );

// Endpoint PATCH
router.patch('/:id', patchUser );

// Endpoint DELETE
router.delete('/:id', deleteUser );

export default router;