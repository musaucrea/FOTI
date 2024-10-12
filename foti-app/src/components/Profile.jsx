// src/Profile.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div>
          <p>
            <strong>Full Name:</strong> {user.fullName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add other user details as needed */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
