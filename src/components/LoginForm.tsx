import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthPages.css';

// interface for possible errors sa login
interface LoginErrors {
  email?: string;
  password?: string;
  form?: string;
}

export function LoginForm() {
  // hardcoded credentials : for demo purposes
  const TRUE_EMAIL = "test123@gmail.com";
  const TRUE_PASSWORD = "password123";

  // states for form inputs and behaviors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const navigate = useNavigate();

  // i check ang localStorage para sa remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);  // butangan og email field
      setRememberMe(true);        // i auto-check the checkbox 
    }
  }, []);

  // handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    // stop page refresh
    e.preventDefault();
    let newErrors: LoginErrors = {}; // temp object for validation errors

    // EMAIL VALIDATION
    if (!email) // check if empty ba ang email
      newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))// check using regex if valid ba ang email format
      newErrors.email = 'Please enter a valid email address';

    // PASSWORD VALIDATION
    if (!password)  // check if empty ba ang inputted nga password
      newErrors.password = 'Password is required';
    else if (password.length < 8)  // dapat greater than 8 ang len sa password
      newErrors.password = 'Password must be at least 8 characters';

    // check if naay errors : if naa edi ayaw ipa login
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // check if ang credentials nag match sa hardcoded
    if (email !== TRUE_EMAIL || password !== TRUE_PASSWORD) {
      setErrors({ form: 'Invalid email or password' });
      return;
    }

    // if valid, i simulate ang loading taraw
    setIsLoading(true);
    // clear errors
    setErrors({});

    // fake loading 
    setTimeout(() => {
      setIsLoading(false);

      // REMEMBER ME 
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email); // save email
      } else {
        localStorage.removeItem('rememberedEmail'); // clear email if unchecked
      }

      // i store sa local storage
      localStorage.setItem('isAuthenticated', 'true');
      // navigate to home page
      navigate('/home');
    }, 2000); // 2000 == 2 seconds nga delay
  };

  return (
    <div className="auth-page">
      <div className="login-form-container">

        {/* page heading */}
        <div className="login-header">
          <h1 className="login-title">Welcome back!</h1>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>

        {/* display og global form error */}
        {errors.form && (
          <div className="form-error" role="alert">
            <p>{errors.form}</p>
          </div>
        )}

        {/* LOGIN FORM START */}
        <form onSubmit={handleSubmit} noValidate>

          {/* EMAIL INPUT */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
              required
            />

            {/* mag show error if email invalid */}
            {errors.email && (
              <p id="email-error" className="error-message">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD INPUT */}
          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password" className="form-label">Password</label>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'} // toggle visibility
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="••••••••"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                autoComplete="current-password"
                required
              />
              {/* toggle button para sa show or hide sa password */}
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
            {/* show error if password invalid */}
            {errors.password && (
              <p id="password-error" className="error-message">{errors.password}</p>
            )}
          </div>

          {/* REMEMBER ME CHECKBOX */}
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="checkbox"
            />
            <label htmlFor="remember-me" className="checkbox-label">
              Remember me
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircleIcon className="spinner" size={18} /> {/* spinner */}
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </form>

        {/* SIGNUP LINK BELOW FORM */}
        <p className="signup-text">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
