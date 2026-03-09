import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  const slides = [
    {
      imge: "https://iili.io/f5l3pyb.jpg",
      log: "https://iili.io/KLQzN8x.png",
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
    
<Link to="/" className="flex items-center gap-2">
  <img src="/ClimeScore.png" alt="logo" className="h-10" />
  <span className="font-display font-bold text-sm text-foreground">by <span className="gradient-text">NettZero</span></span>
</Link>

      {/* MAIN SECTION */}
      <div style={{ position: "relative" }}>

        {/* BACKGROUND IMAGE */}
        <div
    style={{
      width: "90%",
      height: "90vh",
      margin: "auto",
      border: "4px solid #0F9766", // green border
      borderRadius: "20px",
      position: "relative",
      overflow: "hidden", // ensures content stays inside rounded corners
    }}
  >

        {/* LOGIN ROW - TOP RIGHT */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "80px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            background: "rgba(242, 249, 239, 0.9)",
            padding: "10px 15px",
             borderRadius: "10px",
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
            borderRadius: "10px",

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
               borderRadius: "10px",
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
               borderRadius: "10px",
            }}
          >
            Login
          </button>
        </div>

        {/* CENTER TEXT CONTENT */}
          <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "#f1f6f4",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "400px",
          }}
        >
          <img     style={{ width: "100%", height: "auto" }} // scales image to fit div
 src="https://iili.io/KLQzN8x.png" alt="" />
          </div>

        <div
          style={{
            position: "absolute",
            top: "57%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // background: "#0F9766",
            color: "#0F9766",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >
          <h2 style={{ marginBottom: "10px", fontSize:"22px" }}>{slides[currentSlide].text}</h2>
          </div>

           <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // background: "#0F9766",
            color: "#0F9766",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >

          <p style={{ marginBottom: "20px",  fontSize:"20px" }}>{slides[currentSlide].sub}</p>
        </div>



         <div
          style={{
            position: "absolute",
            top: "83%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "white",
            color: "#0F9766",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "650px",
          }}
        >



           <button
      onClick={() => navigate("/client/register")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: "12px 28px",
        background: isHover ? "#0F9766" : "white",
        color: isHover ? "white" : "#0F9766",
        border: "1px solid #0F9766",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "4px",
        transition: "all 0.3s ease", // smooth hover effect
      }}
    >
      Register Now
    </button>
              </div>
    </div>

      </div>
    </div>
  );
}