import React, { useState } from "react";
import "../login/login.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { Navigate } from "react-router-dom";
import api from "../../utils/axios";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isAuth } = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = {
      email,
      password,
    };
    dispatch(loginUser(loggedUser));
  };

  const startGoogle = () => {
    window.location.href = "http://localhost:8000/user/auth/google";
  };
  const startFacebook = () => {
    window.location.href = "http://localhost:8000/user/auth/facebook";
  };

  return !loading && isAuth ? (
    <Navigate to="/profile" />
  ) : (
    <div className="login-container">
      <div className="login-box">
        <form action="" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="input-box">
            <label>Email:</label>
            <input
              type="email"
              id=""
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id="btn-login" type="submit">
            Submit
          </button>
          <div>
            <p>Forget Password ?</p>
          </div>
          <div className="chooselogin">
            <h3>Or</h3>
          </div>

          <div className="social-login">
            <button
              id="google-login"
              onClick={startGoogle}
              style={{ margin: "5px" }}
            >
              <FcGoogle /> SignUp with google
            </button>

            <button
              id="facebook-login"
              onClick={startFacebook}
              style={{ margin: "5px" }}
            >
              <SiFacebook /> SignUp with facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
