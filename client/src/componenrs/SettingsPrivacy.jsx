import React from "react";

const SettingsPrivacy = () => {
  return (
    <div className="container" style={{ maxWidth: 700, marginTop: 24 }}>
      <h2>Settings & Privacy</h2>
      <ul style={{ lineHeight: 2 }}>
        <li>Change password from email reset flow</li>
        <li>Update personal information from Edit Profile</li>
        <li>Privacy: your email is used for authentication only</li>
      </ul>
    </div>
  );
};

export default SettingsPrivacy;



