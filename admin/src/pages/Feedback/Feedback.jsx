import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feedback.css';

const Feedback = ({ url }) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get(url+"/api/contact-us/submissions");
      if (response.data.success) {
        setSubmissions(response.data.data);
      } else {
        console.error('Failed to fetch submissions:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  return (
    <div className="contact-us-admin">
      <h3>Feedback:</h3>
      <div className="submission-list">
        {submissions.map((submission, index) => (
          <div key={index} className="submission-item">
            <div>
              <p><strong>Name:</strong> {submission.name}</p>
              <p><strong>Email:</strong> {submission.email}</p>
              <p><strong>Message:</strong> {submission.message}</p>
              <p><strong>Rating:</strong> {submission.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
