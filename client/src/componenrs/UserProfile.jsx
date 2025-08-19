import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../componenrs/userprofile.css";
import { getProfile, modifyuser } from "../redux/actions/userActions";
import { Spinner } from "react-bootstrap";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userReducer);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  // Update form fields when user data is loaded
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
      setAddress(user.address || "");
    }
  }, [user]);

  const handlemodify = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to update your profile");
      return;
    }

    const updateuser = {
      _id: user._id,
      name,
      phone,
      email,
      address,
    };
    if (name && phone && email && address) {
      dispatch(modifyuser(updateuser));
      dispatch(getProfile());
    } else {
      alert("Please fill in all fields");
    }
  };

  // Check if user is logged in
  if (!localStorage.getItem("token")) {
    return (
      <div className="container">
        <h1>Profile</h1>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <div className="container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : !user ? (
        <div className="container">
          <h1>Profile</h1>
          <p>Loading user data...</p>
        </div>
      ) : (
        <div className="container">
          <h1>Profile Edit</h1>
          <form onSubmit={handlemodify}>
            <div className="profile-image">
              <img
                src={user.image || "https://via.placeholder.com/150"}
                alt="ProfileImage"
              />
              <input type="file" id="profile-image-input" accept="image/*" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
