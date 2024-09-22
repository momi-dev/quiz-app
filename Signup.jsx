
import React, { useState } from "react";
import { Link } from "react-router-dom";


const LoginSignup = () => {
  // State to switch between login and signup forms
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      <div className="tab">
        <button
          className={`tablinks ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tablinks ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      {isLogin ? (
        <div className="form-content">
          <h2>Login</h2>
          <form>
            <label>Email</label>
            <input type="email" required />

            <label>Password</label>
            <input type="password" required />

            <button type="submit" className="form-btn">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="form-content">
          <h2>Signup</h2>
          <form>
            <label>Full Name</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" required />

            <label>Password</label>
            <input type="password" required />

            <label>Confirm Password</label>
            <input type="password" required />

           <Link to="/question1"> <button type="submit" className="form-btn"
            >
              Signup
            </button >
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;




