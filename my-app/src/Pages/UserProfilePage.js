// Pages/UserProfilePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Joined: {user.joinDate}</p>
    </div>
  );
};

export default UserProfilePage;
