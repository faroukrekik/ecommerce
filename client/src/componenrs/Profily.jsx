import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/userActions";
import { getProd } from "../redux/actions/prodActions";

const Profily = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProd());
  }, [dispatch]);

  // Check if user is logged in
  if (!localStorage.getItem("token")) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{user?.name || "User"}</h1>
      {user && (
        <div>
          <p>Email: {user.email || "Not provided"}</p>
          <p>Phone: {user.phone || "Not provided"}</p>
          <p>Address: {user.address || "Not provided"}</p>
        </div>
      )}
    </div>
  );
};

export default Profily;
