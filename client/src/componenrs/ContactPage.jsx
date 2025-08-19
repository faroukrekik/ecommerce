import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };
  return (
    <div className="container" style={{ maxWidth: 700, marginTop: 24 }}>
      <h2>Contact</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <textarea
          placeholder="Message"
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;



