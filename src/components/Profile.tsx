import React from "react";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  return (
    <div>
      <h1>Profile</h1>
      <h4>Welcome Mr. {user.name}</h4>
    </div>
  );
};

export default Profile;
