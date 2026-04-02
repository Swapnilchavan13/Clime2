import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [sector, setSector] = useState("");
  const [website, setWebsite] = useState("");
  const [plan, setPlan] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logoImg, setLogoImg] = useState(null);
  const [logoImgPreview, setLogoImgPreview] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("contactNumber", contactNumber);
    formData.append("email", email);
    formData.append("organization", organization);
    formData.append("sector", sector);
    formData.append("website", website);
    formData.append("plan", plan);
    formData.append("password", password);
    if (logoImg) formData.append("logoimg", logoImg);

    try {
      const response = await fetch("https://backend.climescore.com/addclient", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Registered successfully!");
        navigate("/client/login");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred during registration.");
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogoImg(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoImgPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Injecting standard CSS here allows for a single-file solution 
        while retaining media queries for mobile/tablet and hover states. 
      */}
      <style>{`
        :root {
          --primary-color: #2f855a;
          --primary-hover: #276f4a;
          --bg-color: #f4f7f5;
          --card-bg: #ffffff;
          --text-main: #333333;
          --text-muted: #666666;
          --border-color: #d1d5db;
          --input-focus-ring: rgba(47, 133, 90, 0.2);
        }

        .register-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--bg-color);
          padding: 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .register-card {
          width: 100%;
          max-width: 800px;
          background: var(--card-bg);
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
          margin: auto;
        }

        .register-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .register-header img {
          height: 55px;
          margin-bottom: 10px;
        }

        .register-header h2 {
          color: var(--text-main);
          margin: 0 0 5px 0;
          font-size: 24px;
        }

        .register-header p {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .full-width {
            grid-column: span 2;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
        }

        .input-group input[type="text"],
        .input-group input[type="tel"],
        .input-group input[type="email"],
        .input-group input[type="url"],
        .input-group input[type="password"],
        .input-group select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 15px;
          color: var(--text-main);
          transition: all 0.2s ease;
          box-sizing: border-box;
          background-color: #fafafa;
        }

        .input-group input:focus,
        .input-group select:focus {
          outline: none;
          border-color: var(--primary-color);
          background-color: #fff;
          box-shadow: 0 0 0 3px var(--input-focus-ring);
        }

        .plan-section {
          margin-top: 25px;
        }

        .plan-section label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
          display: block;
          margin-bottom: 10px;
        }

        .plan-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        @media (min-width: 600px) {
          .plan-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .plan-card {
          padding: 15px;
          border-radius: 10px;
          border: 2px solid var(--border-color);
          background: var(--card-bg);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }

        .plan-card:hover {
          border-color: #a7d3b8;
        }

        .plan-card.active {
          border-color: var(--primary-color);
          background: #f0fdf4;
        }

        .plan-card input[type="radio"] {
          accent-color: var(--primary-color);
          transform: scale(1.2);
        }

        .plan-card span {
          font-weight: 500;
          color: var(--text-main);
        }

        .logo-upload-section {
          margin-top: 25px;
        }

        .logo-preview {
          margin-top: 15px;
          width: 120px;
          height: auto;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          padding: 5px;
          background: #fff;
        }

        .terms-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          font-size: 14px;
          color: var(--text-muted);
        }

        .terms-wrapper input[type="checkbox"] {
          accent-color: var(--primary-color);
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .submit-btn {
          width: 100%;
          margin-top: 25px;
          padding: 16px;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .submit-btn:not(:disabled) {
          background-color: var(--primary-color);
        }

        .submit-btn:not(:disabled):hover {
          background-color: var(--primary-hover);
        }

        .submit-btn:not(:disabled):active {
          transform: scale(0.98);
        }

        .submit-btn:disabled {
          background-color: #cbd5e1;
          cursor: not-allowed;
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">
          {/* Header */}
          <div className="register-header">
            <img src="/ClimeScore.png" alt="ClimeScore Logo" />
            <h2>Client Registration</h2>
            <p>Contact Number will be your Login ID</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Main Form Grid */}
            <div className="form-grid">
              <div className="input-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>

              <div className="input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>

              <div className="input-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label>Organization</label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Website</label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://www.example.com"
                  required
                />
              </div>

              <div className="input-group full-width">
                <label>Sector</label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Sector
                  </option>
                  <option value="IT">IT</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="plan-section">
              <label>Select Plan</label>
              <div className="plan-wrapper">
                {["Basic", "Professional", "Enterprise"].map((p) => (
                  <div
                    key={p}
                    onClick={() => setPlan(p)}
                    className={`plan-card ${plan === p ? "active" : ""}`}
                  >
                    <input type="radio" checked={plan === p} readOnly />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Password Grid */}
            <div className="form-grid" style={{ marginTop: "25px" }}>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Logo Upload */}
            <div className="logo-upload-section">
              <div className="input-group">
                <label>Upload Logo</label>
                <input type="file" accept="image/*" onChange={handleLogoChange} />
              </div>
              {logoImgPreview && (
                <img src={logoImgPreview} alt="Preview" className="logo-preview" />
              )}
            </div>

            {/* Terms & Submit */}
            <div className="terms-wrapper">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label htmlFor="terms" style={{ cursor: "pointer" }}>
                I accept the Terms & Conditions
              </label>
            </div>

            <button type="submit" disabled={!acceptTerms} className="submit-btn">
              Register Client
            </button>
          </form>
        </div>
      </div>
    </>
  );
}