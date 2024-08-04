import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>View Profile</title>
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          readOnly=""
          defaultValue="Rudra Bhatt"
        />
      </div>
      <div className="profile-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          readOnly=""
          defaultValue="rudra@example.com"
        />
      </div>
      <div className="profile-field">
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          readOnly=""
          defaultValue={+1234567890}
        />
      </div>
      <div className="profile-field">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          readOnly=""
          defaultValue="DAIICT"
        />
        <div className="profile-field-update">
            <button>Update</button>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Profile