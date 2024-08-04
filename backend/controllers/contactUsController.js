// Import the ContactUsModel from the correct path
import ContactUsModel from "../models/contactUsModel.js";

// Submit Contact Us form
const submitContactForm = async (req, res) => {
    const { name, email, message, rating } = req.body;

    try {
        const newSubmission = new ContactUsModel({
            name,
            email,
            message,
            rating
        });

        const savedSubmission = await newSubmission.save();
        res.status(201).json({ success: true, data: savedSubmission });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ success: false, message: 'Failed to submit contact form' });
    }
};

// Get all submissions
const getAllSubmissions = async (req, res) => {
    try {
        const submissions = await ContactUsModel.find({}); // Use ContactUsModel instead of ContactUs
        res.json({ success: true, data: submissions });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch submissions' });
    }
};

export {
    submitContactForm,
    getAllSubmissions
};
