import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'we@admin' && password === 'Codewith@nkit8') {
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error if credentials are incorrect */}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <label>Password</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>

      {[...Array(50)].map((_, i) => (
        <span key={i} style={{ '--i': i }}></span>
      ))}
    </div>
  );
};

export default Login;