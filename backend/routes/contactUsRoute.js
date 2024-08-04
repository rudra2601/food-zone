// routes/contactUsRoute.js

import express from 'express';
import { submitContactForm , getAllSubmissions } from '../controllers/contactUsController.js';
const contactUsRouter = express.Router();

// POST request to submit Contact Us form
contactUsRouter.post('/submit', submitContactForm);
contactUsRouter.get('/submissions', getAllSubmissions);

export default contactUsRouter;
