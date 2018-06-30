import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.send('Memes');
});

router.get('/top', (req, res, next) => {
  return res.send('Top memes');
});

export default router;
