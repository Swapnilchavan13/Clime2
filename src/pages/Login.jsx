import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [isHover, setIsHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const isTablet = screenWidth <= 1024 && screenWidth > 768;
const isMobile = screenWidth <= 768;

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
        <img src="/ClimeScore.png" alt="logo" style={{ height: "40px" }} />
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>
          by <span style={{ color: "#0F9766" }}>NettZero</span>
        </span>
      </Link>

      {/* MAIN SECTION */}
      <div style={{ position: "relative" }}>

        {/* MAIN CONTAINER */}
        <div
        style={{
  width: isMobile ? "95%" : isTablet ? "92%" : "90%",
  height: isMobile ? "85vh" : "90vh",
  margin: "auto",
  border: "4px solid #0F9766",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
}}
        >

          {/* LOGIN ROW */}
          <div
           style={{
  position: "absolute",
  top: "20px",
  right: isMobile ? "10px" : isTablet ? "30px" : "60px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  width: isMobile ? "90%" : isTablet ? "45%" : "30%",
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
  width: isMobile ? "100%" : isTablet ? "42%" : "40%",
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
  width: isMobile ? "100%" : isTablet ? "42%" : "40%",
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
                width: isMobile ? "100%" : "auto",
              }}
            >
              Login
            </button>
          </div>

          {/* CENTER LOGO */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "35%" : isTablet ? "30%" : "30%",
              
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              background: "#f1f6f4",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: isMobile ? "250px" : "400px",
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://iili.io/KLQzN8x.png"
              alt=""
            />
          </div>

          {/* TITLE */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "48%" : "57%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#0F9766",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "650px",
            }}
          >
            <h2
              style={{
                marginBottom: "10px",
                fontSize: isMobile ? "12px" : "22px",
              }}
            >
              {slides[currentSlide].text}
            </h2>
          </div>

          {/* SUB TEXT */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "60%" : "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#0F9766",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "650px",
            }}
          >
            <p
              style={{
                marginBottom: "20px",
                fontSize: isMobile ? "12px" : "20px",
              }}
            >
              {slides[currentSlide].sub}
            </p>
          </div>

          {/* REGISTER BUTTON */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "70%" : "83%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              background: "white",
              color: "#0F9766",
              padding: "10px",
              borderRadius: "10px",
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
                transition: "all 0.3s ease",
                width: isMobile ? "200px" : "auto",
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