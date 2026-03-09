import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const slides = [
    {
      imge: "https://iili.io/f5l3pyb.jpg",
      text: "Welcome to our robust, AI powered Emission Measurement Platform",
      sub: "Over 300,000 tCO2e of emissions accurately measured for Industry Leading Organizations",
    },
  ];

  const [currentSlide] = useState(0);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://backend.climescore.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userId", userId);
        alert("Login successful!");
        navigate("/client/combinedemission");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 30px",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img src="/ClimeScore.png" alt="logo" style={{ height: "40px" }} />
        </Link>

      </nav>

      {/* MAIN SECTION */}
      <div style={{ position: "relative" }}>

        {/* BACKGROUND IMAGE */}
        <img
          src={slides[currentSlide].imge}
          alt="slide"
          style={{
            width: "90%",
            height: "90vh",
            objectFit: "cover",
            margin:'auto'
          }}
        />

        {/* LOGIN ROW - TOP RIGHT */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "80px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            background: "rgba(255,255,255,0.9)",
            padding: "10px 15px",
            borderRadius: "6px",
          }}
        >
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{
              padding: "8px",
              width: "120px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "8px",
              width: "120px",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              padding: "8px 15px",
              background: "#0F9766",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>

        {/* CENTER TEXT CONTENT */}
        <div
          style={{
            position: "absolute",
            top: "57%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "#0F9766",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>{slides[currentSlide].text}</h2>
          </div>

           <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "#0F9766",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >

          <p style={{ marginBottom: "20px" }}>{slides[currentSlide].sub}</p>
        </div>



         <div
          style={{
            position: "absolute",
            top: "83%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // background: "#0F9766",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >



          <button
            onClick={() => navigate("/client/register")}
            style={{
                padding: "12px 28px",
                background: "#0F9766",
                color: "white",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "4px",
            }}
            >
            Register Now
          </button>
              </div>

      </div>
    </div>
  );
}