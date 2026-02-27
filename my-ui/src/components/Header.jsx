import { Link, useNavigate } from "react-router-dom";
import { isAdmin, logout, getRole } from "../auth";
import logo from "../assets/images/logo1.png"; // если у тебя logo.png — поменяй

export default function Header() {
  const navigate = useNavigate();
  const role = getRole();

  function handleLogout() {
    logout();
    navigate("/");
    window.location.reload(); // чтобы меню обновилось
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="brand" to="/">
          <img className="brand__logo" src={logo} alt="Logo" />
          <div className="brand__text">
            <div className="brand__name">InteLL Park</div>
            <div className="brand__sub">smart parking solutions</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/register-vehicle">Register Vehicle</Link>

          {isAdmin() && <Link to="/dashboard">Dashboard</Link>}
          {isAdmin() && <Link to="/admin">Admin</Link>}
        </nav>

        {role === "guest" && (
          <Link className="btn btn--pill login-btn" to="/profile">
            Login
          </Link>
        )}

        {role !== "guest" && (
          <button
            className="btn btn--pill login-btn"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}