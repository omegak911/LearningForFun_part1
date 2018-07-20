import express from 'express';
const router = express.Router();

router
  .use('/pokemon')
  .use('/auth');

export default router;