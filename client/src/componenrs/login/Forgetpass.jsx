import React, { useState } from "react";
import "../login/forget.css";
import { useDispatch } from "react-redux";
import { send_mail } from "../../redux/actions/userActions";

const Forgetpass = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_mail(email));
  };

  return (
    <div>
      <div className="search-container">
        <h2>Trouver votre compte</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={{ margin: "5px" }} type="submit">
            Rechercher
          </button>
          <button className="cancel" style={{ margin: "5px" }}>
            {" "}
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgetpass;
