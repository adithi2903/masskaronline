import React, { useState, type KeyboardEvent } from "react";

type AuthFormProps = {
  onLoginSuccess: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [ajaxMsg, setAjaxMsg] = useState("");
  const [forgotMode, setForgotMode] = useState(false);

  // Login fields
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Forgot password field
  const [forgotUsername, setForgotUsername] = useState("");

  // Signup fields
  const [signName, setSignName] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPhone, setSignPhone] = useState("");
  const [signAreaId, setSignAreaId] = useState("");
  const [signArea, setSignArea] = useState("");
  const [signPassword, setSignPassword] = useState("");

  // Handle Enter key press for login form
  const handleLoginKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLoginSubmit();
    }
  };

  const handleLoginSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("isLoggedIn", "true"); // ✅ Store login status
      onLoginSuccess(); // Continue with app logic
    }, 1000);
  };
  localStorage.setItem("isLoggedIn", "true");
  

  const handleForgotSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAjaxMsg("Reset link sent if user exists");
    }, 1000);
  };

  const handleSignupSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAjaxMsg("Signup completed");
    }, 1000);
  };

  return (
    <div className="auth-form-container">
      <div className="auth-forms-wrapper">
        {/* Sign In */}
        <div className="auth-form-section">
          {!forgotMode && (
            <>
              <h2 className="form-title">Sign In</h2>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                onKeyDown={handleLoginKeyPress}
                className="input-field"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                onKeyDown={handleLoginKeyPress}
                className="input-field"
              />
              <div className="form-footer">
                <button
                  onClick={handleLoginSubmit}
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                <button
                  onClick={() => {
                    setForgotMode(true);
                    setAjaxMsg("");
                  }}
                  className="btn-link"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
            </>
          )}

          {/* Forgot Password */}
          {forgotMode && (
            <>
              <h2 className="form-title">Reset Password</h2>
              <input
                type="text"
                placeholder="Registered email"
                value={forgotUsername}
                onChange={(e) => setForgotUsername(e.target.value)}
                className="input-field"
              />
              <div className="form-footer">
                <button
                  onClick={handleForgotSubmit}
                  disabled={loading}
                  className="btn btn-warning"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <button
                  onClick={() => {
                    setForgotMode(false);
                    setAjaxMsg("");
                  }}
                  className="btn btn-secondary"
                >
                  Go Back
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sign Up */}
        <div className="auth-form-section">
          <h2 className="form-title">Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={signName}
            onChange={(e) => setSignName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={signEmail}
            onChange={(e) => setSignEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={signPhone}
            onChange={(e) => setSignPhone(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Area ID"
            value={signAreaId}
            onChange={(e) => setSignAreaId(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Present Address"
            value={signArea}
            onChange={(e) => setSignArea(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={signPassword}
            onChange={(e) => setSignPassword(e.target.value)}
            className="input-field"
          />
          <button
            onClick={handleSignupSubmit}
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </div>

      {/* Ajax message */}
      {ajaxMsg && <div className="ajax-msg">{ajaxMsg}</div>}
    </div>
  );
};

export default AuthForm;
