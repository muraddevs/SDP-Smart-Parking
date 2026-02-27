import { useState } from "react";
import logo from "../assets/images/logo1.png";
import Header from "../components/Header";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    // пока просто проверка (потом подключим backend)
    console.log({ fullName, email, phone, password });
    alert("Registered (UI only). Later we will connect backend.");
  }

  return (
    <div>
      <Header />

      <section className="section section--light">
        <div className="container">
          <h2 className="section__title dark reveal is-visible">Register</h2>

          <div className="form-card reveal is-visible">
            <h3 className="form-card__title">Sign Up</h3>

            <form className="grid-form" onSubmit={handleRegister}>
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </label>

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
                <span>Phone Number</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+994..."
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
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}