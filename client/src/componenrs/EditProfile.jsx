import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyuser } from "../redux/actions/userActions";

const EditProfile = () => {
  const { user, loading } = useSelector((s) => s.userReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user?._id) return;
    dispatch(modifyuser({ _id: user._id, ...form }));
  };

  return (
    <div className="container" style={{ maxWidth: 600, marginTop: 24 }}>
      <h2>Edit profile</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} />
        </label>
        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} />
        </label>
        <button type="submit" disabled={loading}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;



