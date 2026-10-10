import React, { useState } from "react";
import { Button, TextField } from "@instiserve/design-system";
import "./SignIn.css";

/**
 * SignIn Screen — Preliminary Screen
 * Based on Figma SIGN IN frame
 */
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    console.log("Sign in attempt:", { email, password });
  };

  return (
    <div className="signin-screen">
      <div className="signin-container">
        <div className="signin-brand">
          <svg width="182" height="48" viewBox="0 0 182 48" fill="none">
            <rect width="182" height="48" rx="10" fill="#0088FF" />
            <path d="M24 24L36 36L60 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="72" y="32" fill="white" fontSize="18" fontWeight="600" fontFamily="Outfit, sans-serif">InstiServe</text>
          </svg>
          <p className="signin-tagline">Sign in to your institution portal</p>
        </div>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-field">
            <label htmlFor="email" className="signin-label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signin-input"
              placeholder="you@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="signin-field">
            <div className="signin-field-header">
              <label htmlFor="password" className="signin-label">Password</label>
              <a href="#forgot" className="signin-forgot">Forgot password?</a>
            </div>
            <div className="signin-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="signin-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="signin-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  {showPassword ? (
                    <path d="M10 4C5 4 1.7 10 1.7 10S5 16 10 16s8.3-6 8.3-6S15 4 10 4z" />
                  ) : (
                    <>
                      <path d="M10 4C5 4 1.7 10 1.7 10S5 16 10 16s8.3-6 8.3-6S15 4 10 4z" />
                      <line x1="2" y1="18" x2="18" y2="2" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="signin-remember">
            <label className="signin-checkbox">
              <input type="checkbox" name="remember" />
              <span className="signin-checkbox-box" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 7 6 10 11 3" />
                </svg>
              </span>
              <span>Remember me</span>
            </label>
          </div>

          <Button type="submit" variant="primary" size="regular" className="signin-submit">
            Sign in
          </Button>
        </form>

        <div className="signin-divider">
          <span>or continue with</span>
        </div>

        <div className="signin-social">
          <button type="button" className="signin-social-btn" aria-label="Sign in with Google">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path fill="#4285F4" d="M19.6 10.2c0-.7-.1-1.4-.2-2H10v3.9h5.4c-.2 1.3-.9 2.3-2 3.1v2.5h3.2c1.9-1.7 2.9-4.3 2.9-7.5z" />
              <path fill="#34A853" d="M10 20c2.7 0 4.9-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H1.1v2.6C2.8 17.4 6.2 20 10 20z" />
              <path fill="#FBBC05" d="M4.4 11.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V5.5H1.1C.4 7 0 8.4 0 10s.4 3 1.1 4.5l3.3-2.6z" />
              <path fill="#EA4335" d="M10 4c1.5 0 2.8.5 3.8 1.5l2.8-2.8C14.9 1 12.7 0 10 0 6.2 0 2.8 2.6 1.1 5.5l3.3 2.6C5.2 5.8 7.4 4 10 4z" />
            </svg>
            <span>Google</span>
          </button>
          <button type="button" className="signin-social-btn" aria-label="Sign in with Microsoft">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <rect x="1" y="1" width="8" height="8" fill="#F25022" />
              <rect x="11" y="1" width="8" height="8" fill="#7FBA00" />
              <rect x="1" y="11" width="8" height="8" fill="#00A4EF" />
              <rect x="11" y="11" width="8" height="8" fill="#FFB900" />
            </svg>
            <span>Microsoft</span>
          </button>
        </div>

        <p className="signin-footer">
          Don't have an account? <a href="#signup">Contact your administrator</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;