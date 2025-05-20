import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Welcome to Design Community</h1>
        <p className="signin-text">
          Already have an account? <a href="#">Log in</a>
        </p>

        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Username</label>
          <input type="text" placeholder="Choose a username" />

          <label>Password</label>
          <div className="password-input-wrapper">
            <input type={showPassword ? 'text' : 'password'} placeholder="Create a password" />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈 Hide' : '👁️ Show'}
            </button>
          </div>

          <ul className="password-hints">
            <li>● Use 8 or more characters</li>
            <li>● One Uppercase character</li>
            <li>● One lowercase character</li>
            <li>● One special character</li>
            <li>● One number</li>
          </ul>

          <label className="checkbox-container">
            <input type="checkbox" />
            I want to receive emails about the product, feature updates, events, and promotions.
          </label>

          <p className="terms-text">
            By creating an account, you agree to the{' '}
            <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <button className="create-account-button" disabled>
            Create an account
          </button>

          <p className="signin-bottom">
            Already have an account? <a href="#">Log in</a>
          </p>
        </form>
      </div>

      <div className="signup-right">
        <img src="https://i.imgur.com/G7D0R1N.png" alt="3D Art" />
      </div>
    </div>
  );
};

export default SignupPage;
