// Pages/UserProfilePage.js
import React from 'react';

const UserProfilePage = ({ user }) => {
  if (!user) {
    return <h1>Please log in to see your profile.</h1>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfilePage;
