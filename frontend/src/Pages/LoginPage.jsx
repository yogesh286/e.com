import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userid = sessionStorage.getItem("userid");

    if(userid){
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const res = await fetch("http://localhost:3004/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if(res.status === 200){

        sessionStorage.setItem("userid", data.user._id);

        setEmail("");
        setPassword("");

        console.log(data.user);

        navigate("/profile");

      }else{

        sessionStorage.removeItem("userid");
        alert(data.message);

      }

    }catch(error){

      alert("Server error");

    }

  };

  return (
    <section className="auth-wrapper">

      <div className="auth-shell">

        <div className="auth-side">
          <h2>ePower Studio</h2>
          <p>Sign in to track orders and manage your account.</p>
        </div>

        <div className="auth-card">

          <h1>Login</h1>

          <form onSubmit={handleSubmit} className="auth-form">

            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="auth-btn">
              Login
            </button>

          </form>

          <p className="auth-footer-text">
            New user? <Link to="/register">Create account</Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default LoginPage;