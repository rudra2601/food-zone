import React, { useState } from 'react';
import './Contact_Us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Contact_Us = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        rating: null // null indicates no initial rating
    });

    const [hoverRating, setHoverRating] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRatingClick = (rating) => {
        setFormData(prevState => ({
            ...prevState,
            rating: rating + 1 // Add 1 to convert index to 1-based rating
        }));
    };

    const handleMouseEnter = (rating) => {
        setHoverRating(rating);
    };

    const handleMouseLeave = () => {
        setHoverRating(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message || !formData.rating) {
            alert('Please fill out all fields including the rating.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/contact-us/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    rating: null
                });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    };

    const stars = [0, 1, 2, 3, 4]; // Array to generate 5 stars

    return (
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            <form className="contact-us-form" onSubmit={handleSubmit}>
                <p className='details'>Email_id: rio235@gmail.com</p>
                <p className='details'>Mobile_No: 9408619812</p>
                <p className='details'>Address: Iscon Street, Ahmedbad</p>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="email-message-group">
                    <div className="form-group email">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group message">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                        />
                    </div>
                </div>
                <div className="rating-group">
                    <label>Rating:</label><br />
                    {stars.map((index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={index <= (hoverRating ?? formData.rating - 1) ? fasStar : farStar}
                            className="star"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleRatingClick(index)}
                        />
                    ))}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact_Us;
