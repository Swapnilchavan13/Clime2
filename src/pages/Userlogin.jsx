import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from "@/components/ui/button";
import CarbonAtom from "@/components/CarbonAtom";
import { Menu, X } from "lucide-react";

export default function Userlogin() {
  const storedLoginStatus = localStorage.getItem('isUserLoggedIn') === 'true';
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState(storedLoginStatus);
  const [loggedInUserName, setLoggedInUserName] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUserName('');
    setLoginStatus(false);
    localStorage.setItem('isUserLoggedIn', 'false');
    localStorage.removeItem('useruserId');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://backend.climescore.com/userlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
        setLoggedInUserName(userId);
        localStorage.setItem('isUserLoggedIn', 'true');
        localStorage.setItem('useruserId', userId);
        alert('Login successful!');
        navigate('/user/useremission');
      } else {
        setLoginStatus(false);
        localStorage.setItem('isUserLoggedIn', 'false');
        localStorage.removeItem('useruserId');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus(false);
      localStorage.setItem('isUserLoggedIn', 'false');
      localStorage.removeItem('useruserId');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
         <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          {/* <CarbonAtom size={28} animate={false} />
          <span className="font-display font-bold text-xl text-foreground">
            Clime<span className="gradient-text">Sc</span>ore
          </span> */}
                  <img src="/ClimeScore.png" alt="logo" style={{ height: "40px" }} />
                  <span className="font-display font-bold text-sm text-foreground">by<span className="gradient-text"> NettZero</span></span> 
        </a>
       

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#reports" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reports</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="/clientlogin">
          <Button variant="ghost" size="sm">Client Log in</Button>
          </a>

<a href="/userlogin">

          <Button variant="ghost" size="sm">User Log in</Button>
          </a>
          

          <a href="/clientlogin">
          <Button size="sm">Start Measuring</Button>
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#platform" className="block text-sm text-muted-foreground py-2">Platform</a>
          <a href="#features" className="block text-sm text-muted-foreground py-2">Features</a>
          <a href="#pricing" className="block text-sm text-muted-foreground py-2">Pricing</a>
          <a href="#reports" className="block text-sm text-muted-foreground py-2">Reports</a>
          <Button className="w-full" size="sm">Start Measuring</Button>
        </div>
      )}
    </nav>
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Login
        </h2>

        {/* User ID */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            User ID
          </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Password
          </label>
          <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-400">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 text-sm text-green-600 hover:text-green-800 font-medium"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Login Button */}
       <button
  onClick={handleLogin}
  className="w-full bg-green-700 hover:bg-green-600 font-semibold py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg active:scale-95"
>
  Login
</button>

        {/* Extra */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <span className="text-green-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}