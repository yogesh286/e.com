import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createAccount = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const res = await fetch("http://localhost:3004/api/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword
        })
      });

      const data = await res.json();

      if (res.ok) {

        alert(data.message);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

      } else {

        alert(data.message);

      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <section className="auth-wrapper">
      <div className="auth-shell">

        <div className="auth-side">
          <h2>ePower Studio</h2>
          <p>Create an account to track orders and save favourites.</p>
        </div>

        <div className="auth-card">

          <h1>Create account</h1>

          <form onSubmit={createAccount} className="auth-form">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-btn">
              Create Account
            </button>

          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>

      </div>
    </section>
  );
}

export default RegistrationPage;