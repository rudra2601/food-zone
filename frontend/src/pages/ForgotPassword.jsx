import React, { useState } from "react";
import axios from "axios";
const ForgotPassword = ({ setShowForgotPassword }) => {
  const [url , email, setEmail] = useState("");
 
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url +"/api/user/forgot-password", { email });
      if (response.data.success) {
        alert("Password reset link sent to your email.");
        setShowForgotPassword(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="forgot-password">
      <form onSubmit={onSubmit} className="forgot-password-container">
        <h2>Forgot Password</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Reset Link</button>
        <button type="button" onClick={() => setShowForgotPassword(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
