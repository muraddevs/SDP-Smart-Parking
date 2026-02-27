import { useNavigate } from "react-router-dom";
import { setRole } from "../auth";
import { useState } from "react";
import logo from "../assets/images/logo1.png";
import Header from "../components/Header";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
  e.preventDefault();

  // DEMO LOGIN
  if (email === "admin@ai.com" && password === "admin123") {
    setRole("admin");
    navigate("/dashboard");
    return;
  }

  // обычный пользователь
  setRole("user");
  navigate("/");
}

  return (
    <div>
      <Header />

      <section className="section section--light">
        <div className="container">
          <h2 className="section__title dark reveal is-visible">Profile</h2>

          <div className="form-card reveal is-visible">
            <h3 className="form-card__title">Login</h3>

            <form className="grid-form" onSubmit={handleLogin}>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </label>

              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </label>

              <div className="grid-form__actions">
                <button className="btn btn--dark btn--pill" type="submit">
                  Sign In
                </button>
              </div>
            </form>

            <div
              style={{
                textAlign: "center",
                marginTop: 14,
                color: "rgba(10,24,51,.7)",
                fontSize: 13,
              }}
            >
              Demo page — later we will connect real authentication.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}