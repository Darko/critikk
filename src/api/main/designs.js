import express from 'express';
import * as Controller from '../../controllers/main/designs';

const router = express.Router();

router.get('/', Controller.index);
router.get('/:userId/:designId', Controller.show);
router.put('/:designId', Controller.update);
router.delete('/:designId', Controller.remove);

export default router;
