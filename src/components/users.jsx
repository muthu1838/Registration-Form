import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul className="user-list">
      {users.map((u, i) => (
        <li key={i}>
          <strong>{u.name}</strong> — {u.email}
        </li>
      ))}
    </ul>
  );
}

export default Users;
