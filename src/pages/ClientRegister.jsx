import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ClientRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [sector, setSector] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logoImg, setLogoImg] = useState(null);
  const [logoImgPreview, setLogoImgPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('contactNumber', contactNumber);
    formData.append('email', email);
    formData.append('organization', organization);
    formData.append('sector', sector);
    formData.append('password', password);
    formData.append('logoimg', logoImg);

    const response = await fetch('https://backend.climescore.com/addclient', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Registered successfully! Please log in with your contact number.');

      setFirstName('');
      setLastName('');
      setContactNumber('');
      setEmail('');
      setOrganization('');
      setSector('');
      setPassword('');
      setConfirmPassword('');
      setLogoImg(null);
      setLogoImgPreview(null);

      navigate('/client/login');
    } else {
      alert('Registration failed. Please try again.');
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

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Client Registration</h2>
      <p>Note: Your <strong>Contact Number</strong> will be your login ID.</p>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input style={inputStyle} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name</label>
        <input style={inputStyle} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Contact Number</label>
        <input
          style={inputStyle}
          type="tel"
          value={contactNumber}
          placeholder="Enter 10-digit number"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) setContactNumber(value);
          }}
          maxLength="10"
          required
        />

        <label>Email</label>
        <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Organization Name</label>
        <input style={inputStyle} type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} required />

        <label>Sector / Industry</label>
        <select style={inputStyle} value={sector} onChange={(e) => setSector(e.target.value)} required>
          <option value="">Select Sector</option>
          <option value="IT">IT</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>

        <label>Password</label>
        <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
          <input
            style={{ ...inputStyle, marginBottom: 0 }}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <label>Confirm Password</label>
        <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
          <input
            style={{ ...inputStyle, marginBottom: 0 }}
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <label>Logo Image</label>
        <input type="file" accept="image/*" onChange={handleLogoChange} />

        {logoImgPreview && (
          <img
            src={logoImgPreview}
            alt="Logo Preview"
            style={{ width: "120px", marginTop: "10px", display: "block" }}
          />
        )}

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            background: "#2f855a",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Register
        </button>

      </form>
    </div>
  );
};