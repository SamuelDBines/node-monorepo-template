import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

export const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', (req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

export default app;
