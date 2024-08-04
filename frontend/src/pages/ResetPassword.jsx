import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { url, token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match");
    }
    try {
      const response = await axios.post(url+"/api/user/reset-password", {
        token,
        newPassword,
      });
      if (response.data.success) {
        alert("Password has been reset successfully.");
        // Optionally, redirect the user to login or another page
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error occurred during password reset:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="reset-password">
      <form onSubmit={onSubmit} className="reset-password-container">
        <h2>Reset Password</h2>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          placeholder="Enter new password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Confirm new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
