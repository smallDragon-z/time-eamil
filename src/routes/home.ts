import express from 'express';

const rootRouters = express.Router();
rootRouters.get('/', (req, res) => {
  res.json({ message: 'Welcome to the email home' });
});
export default rootRouters;
