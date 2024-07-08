import React, { useState } from "react";
import "../login/login.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = {
      email,
      password,
    };
    dispatch(loginUser(loggedUser));
  };

  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google/callback");
  };
  const facebookAuth = () => {
    window.open("http://localhost:8000/auth/facebook/callback");
  };
  return (
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
            <a href="http://localhost:8000/auth/google/">
              <button
                id="google-login"
                style={{ margin: "5px" }}
                onClick={googleAuth}
              >
                <FcGoogle /> SignUp with google
              </button>
            </a>

            <a href="http://localhost:8000/auth/facebook/callback">
              <button
                id="facebook-login"
                style={{ margin: "5px" }}
                onClick={facebookAuth}
              >
                <SiFacebook /> SignUp with facebook
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
