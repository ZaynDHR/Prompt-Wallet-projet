import { useState } from 'react';
import { Mail, Lock, Moon, Sun } from 'lucide-react';
import '../css/Login.css';

const Login = ({ darkMode, onLogin, setDarkMode, setCurrentScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      if (email && password) {
        onLogin(email, password);
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="login-page">
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className={`login-theme-toggle ${darkMode ? 'dark' : 'light'}`}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="login-container">
        <div className="login-content">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your Prompt Wallet account</p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <a href="#forgot-password" className="forgot-link">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
