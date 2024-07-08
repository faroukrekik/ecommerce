import React, { useState } from "react";
import "../login/register.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      address,
      phone,
      password,
    };
    dispatch(registerUser(newUser));
  };
  return (
    <div className="form-container">
      <div className="form-box">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="input-box">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" id="submit-button">
            Register
          </button>
          <div className="chooselogin">
            <h3>Or</h3>
          </div>

          <div className="social-login">
            <a href="http://localhost:8000/auth/google/callback">
              <button id="google-login" style={{ margin: "5px" }}>
                <FcGoogle /> SignUp with google
              </button>
            </a>
            <button id="facebook-login" style={{ margin: "5px" }}>
              <SiFacebook /> SignUp with facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
