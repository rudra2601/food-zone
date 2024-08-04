// backend/models/ContactUs.js

import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const ContactUsModel = mongoose.models.ContactUs || mongoose.model('ContactUs', contactUsSchema);

export default ContactUsModel;
