import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css'; // Import the CSS file

const Users = ({ url }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/users`);
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        console.error('Failed to fetch users:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${url}/api/user/users/${userId}`);
      if (response.data.success) {
        fetchUsers(); // Refresh the user list after deletion
        console.log(response.data.message);
      } else {
        console.error('Failed to delete user:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h3 className="header">User List:</h3>
      <div className="users-table">
        {/* Table header */}
        <div className="users-table-format title">
          <b>Name</b>
          <b>Email</b>
          <b>Password</b>
          <b>Action</b>
        </div>
        {/* Table rows */}
        {users.map((user) => (
          <div key={user._id} className="users-table-format">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p onClick={() => handleDelete(user._id)} className="cursor">X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
