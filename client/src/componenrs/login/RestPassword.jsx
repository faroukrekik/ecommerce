import React, { useState } from "react";
import "../login/respass.css";
import { useDispatch, useSelector } from "react-redux";
import { Resetpass } from "../../redux/actions/userActions";
import { Link, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const RestPassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  var id = params.id;
  var token = params.token;
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [password2, setpassword2] = useState("");
  const { passChange } = useSelector((state) => state.userReducer);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (
      password.length >= 6 &&
      password2.length >= 6 &&
      password === password2
    ) {
      dispatch(Resetpass(id, token, password));
      handleShow();
    } else alert("password not matching");
  };
  return (
    <div>
      <div className="reset-container">
        <form action="" onSubmit={handlesubmit}>
          <h3>add new password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3>confirm new password</h3>
          <input
            type="password"
            required
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
          />
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                {passChange ? (
                  <div>
                    <h1>Password Successfully changed</h1>{" "}
                    <Link to={"/login"}>
                      <Button variant="primary">Login</Button>
                    </Link>
                  </div>
                ) : (
                  <h1>Try again</h1>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestPassword;
