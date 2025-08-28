import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Login clicked:', { email, password, rememberMe });
    // Add your login logic here
  };

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[url('https://c.animaapp.com/meu8kae0jVrFXq/img/bg.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`
        }}></div>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <img 
            src="https://c.animaapp.com/meur8v47FVLTqq/img/67709f63669fc8c6f01fff47-group-25-1.png" 
            alt="Munoz Ghezlan Capital Logo" 
            className="h-12 sm:h-16 w-auto mx-auto"
          />
        </div>

        {/* Login Form Card */}
        <div className="bg-[#45454580] backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-2xl">
          {/* Welcome Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-white text-xl sm:text-2xl font-semibold mb-3">
              WELCOME
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed px-2">
              Log in to access your dashboard, track applications, and
              manage your funding opportunities.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full h-12 sm:h-14 px-4 bg-gray-700/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full h-12 sm:h-14 px-4 pr-12 bg-gray-700/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-600/50 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-200" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400 hover:text-gray-200" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Login Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-amber-600 bg-gray-700 border-gray-600 rounded focus:ring-amber-500 focus:ring-2"
                />
                <label htmlFor="remember-me" className="ml-2 text-white text-sm">
                  Remember Me
                </label>
              </div>

              <button
                onClick={handleNext}
                className="w-full sm:w-auto bg-gradient-to-r from-[#8E653A] to-[#BF9A68] hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg min-h-[48px]"
              >
                LOG IN
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 sm:mt-8 text-center space-y-2">
            <div className="text-sm">
              <span className="text-white">Trouble Logging in? </span>
              <button className="text-[#FFDEA4] hover:text-amber-300 underline transition-colors">
                Reset Password
              </button>
            </div>
            <div className="text-sm">
              <span className="text-white">No Account? </span>
              <button className="text-[#FFDEA4] hover:text-amber-300 underline transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-xs">
            © 2025 Munoz Ghezlan Capital. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export const LogIn = LoginPage;