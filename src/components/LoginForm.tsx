import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';
import '../styles/LoginForm.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    form?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors: {
      email?: string;
      password?: string;
    } = {};

    // Validate email
    if (!email) // if walay email naka butang tapos gi submit
      newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) // regex
      newErrors.email = 'Please enter a valid email address';

    // Validate password:
    if (!password) // if walay passowrd naka butang tapos gi submit
      newErrors.password = 'Password is required';
    else if (password.length < 8) // if ang length sa inputted password kay less than 8
      newErrors.password = 'Password must be at least 8 characters';


    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Simulate form submission
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, show a success message
      alert('Login successful!');
    }, 1500);
  };

  return <div className="login-form-container">

    <div className="login-header">
      <h1 className="login-title">Welcome back</h1>
      <p className="login-subtitle">Sign in to your account</p>
    </div>

    {errors.form && <div className="form-error" role="alert">
      <p>{errors.form}</p>
    </div>}

    {/* LOGIN FORM */}
    <form onSubmit={handleSubmit} noValidate>

      {/* INPUT EMAIL */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>

        <input type="email" id="email" name="email" value={email} onChange={e => {
          setEmail(e.target.value);
          if (errors.email) setErrors({
            ...errors,
            email: undefined
          });
        }} className={`form-input ${errors.email ? 'input-error' : ''}`} placeholder="you@example.com" aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" required />
        {errors.email && <p id="email-error" className="error-message">
          {errors.email}
        </p>}
      </div>

      <div className="form-group">
        <div className="password-header">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <div className="password-input-container">
          <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={password} onChange={e => {
            setPassword(e.target.value);
            if (errors.password) setErrors({
              ...errors,
              password: undefined
            });
          }} className={`form-input ${errors.password ? 'input-error' : ''}`} placeholder="••••••••" aria-invalid={errors.password ? 'true' : 'false'} aria-describedby={errors.password ? 'password-error' : undefined} autoComplete="current-password" required />
          <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>
        {errors.password && <p id="password-error" className="error-message">
          {errors.password}
        </p>}
      </div>
      <div className="remember-me">
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="checkbox" />
        <label htmlFor="remember-me" className="checkbox-label">
          Remember me for 30 days
        </label>
      </div>
      <button type="submit" className={`submit-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
        {isLoading ? <>
          <LoaderCircleIcon className="spinner" size={18} />
          Signing in...
        </> : 'Sign in'}
      </button>
    </form>

    {/* BOTTOM SIDE */}
    <p className="signup-text">
      Don't have an account?{' '}
      <a href="#" className="signup-link">
        Sign up
      </a>
    </p>
  </div>;
}