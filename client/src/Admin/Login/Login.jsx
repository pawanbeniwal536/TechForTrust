import React, { useState } from 'react';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'we@admin' && password === 'intern@8') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <label>Password</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="signup-link">
          <p>Don’t have an account? <a href="#">Sign Up</a></p>
        </div>
        <div className="go-home-button flex justify-center mt-8">
  <Link 
    to='/' 
    className='bg-blue-500 text-white font-semibold py-1 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
  >
    GO TO HOME
  </Link>
</div>

      </div>
    </div>
  );
};

export default Login;
