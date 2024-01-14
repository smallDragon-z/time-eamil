import express from 'express';
import getPage from '../utils/screenshot';

const emailRoutes = express.Router();
emailRoutes.get('/sendEmail', (req, res) => {
  getPage().then((r) => res.json({ message: r }));
});
export default emailRoutes;
