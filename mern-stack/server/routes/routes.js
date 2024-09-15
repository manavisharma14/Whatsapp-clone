// routes/routes.js
import express from 'express';
import { addUser, getUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/users', getUser);

export default router;
