import { Button } from "@instiserve/design-system";
import "./SignIn.css";

/**
 * Sign In Screen — Preliminary Screen
 * Based on Figma SIGN IN frames
 */
export function SignIn() {
  return (
    <div className="signin-screen">
      <div className="signin__container">
        <div className="signin__brand">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect width="48" height="48" rx="10" fill="var(--color-brand-primary)" />
            <path d="M12 24L18 30L36 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="signin__title">InstiServe</h1>
          <p className="signin__subtitle">Sign in to your school dashboard</p>
        </div>

        <form className="signin__form" noValidate>
          <div className="signin__field">
            <label htmlFor="email" className="signin__label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signin__input"
              placeholder="you@school.edu"
              autoComplete="email"
              required
            />
          </div>

          <div className="signin__field">
            <div className="signin__field-header">
              <label htmlFor="password" className="signin__label">Password</label>
              <a href="#" className="signin__forgot">Forgot password?</a>
            </div>
            <div className="signin__password-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                className="signin__input"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button type="button" className="signin__toggle" aria-label="Show password">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M1 12s3-8 9-8 9 8 9 8-3 8-9 8-9-8-9-8z" />
                  <circle cx="10" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="signin__remember">
            <label className="signin__checkbox">
              <input type="checkbox" name="remember" />
              <span className="signin__checkbox-box" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 6 9 10 3" />
                </svg>
              </span>
              <span>Remember me</span>
            </label>
          </div>

          <Button type="submit" variant="primary" size="regular" className="signin__submit" fullWidth>
            Sign in
          </Button>
        </form>

        <div className="signin__divider">
          <span>or continue with</span>
        </div>

        <div className="signin__social">
          <button type="button" className="signin__social-btn" aria-label="Sign in with Google">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path fill="#4285F4" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0z" />
              <path fill="#34A853" d="M10 0v6.31h6.31l-2.31 2.31c-.79 1.24-1.96 2.26-3.41 2.95V15h-4.29c-2.31 0-4.29-1.88-4.29-4.2 0-1.05.51-1.98 1.31-2.48L7.69 8.5H4.29V7.5h3.4v-2.5c0-1.41.63-2.65 1.67-3.41C8.34 1.71 9.63 1 11 1c2.21 0 4 1.79 4 4z" />
            </svg>
            <span>Google</span>
          </button>
          <button type="button" className="signin__social-btn" aria-label="Sign in with Microsoft">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <rect width="20" height="20" rx="3" fill="#0078D4" />
              <path fill="white" d="M6 5h8v2H6V5zm0 4h8v2H6V9zm0 4h5v2H6v-2zM14 5v10h2V5h-2z" />
            </svg>
            <span>Microsoft</span>
          </button>
        </div>

        <p className="signin__signup">
          Don't have an account? <a href="#">Contact your administrator</a>
        </p>
      </div>
    </div>
  );
}