import { useState } from "react";

function Register() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    alert("User saved!");
    setUser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />

      <label>Email</label>
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />

      <button type="submit">Save User</button>
    </form>
  );
}

export default Register;
