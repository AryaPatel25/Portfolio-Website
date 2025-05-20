import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import bgImage from '../../assets/login-hero-bg.jpg'; 
import './Login.css';

const Login = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '10px',
      }}
    >
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type="password" required />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>Don't have an account? <Link to="/signup">Register</Link></p> {/* ✅ Link to Signup */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
