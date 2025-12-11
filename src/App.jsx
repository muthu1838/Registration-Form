import { Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";

function App() {
  return (
    <div className="container">

      <nav>
        <Link to="/">Register</Link>
        <Link to="/users">Saved Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
