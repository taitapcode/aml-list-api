import { Router } from 'express';
import { addNew, deleteData, getAll, updateData } from '../controllers/index.js';

const router = Router();

router.get('/', getAll);
router.post('/', addNew);
router.put('/', updateData);
router.delete('/', deleteData);

export default router;
