import express from 'express';
import main from '../../api/main/index';

const router = express.Router();

router.use('/memes', main.memes);
router.use('/designs', main.designs);

export default router;
