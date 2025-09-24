import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  
} from "recharts";
import { Search, Bell, Menu  } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RealEstateDashboard = () => {
  const [purchasePrice, setPurchasePrice] = useState(85680);
  const [downPayment, setDownPayment] = useState(30);

  // Earnings data matching the chart curve in the image
  const earningsData = [
    { year: "2024", value: 0 },
    { year: "2025", value: 5000 },
    { year: "2026", value: 8000 },
    { year: "2027", value: 15000 },
    { year: "2028", value: 28000 },
    { year: "2029", value: 45000 },
    { year: "2030", value: 65000 },
    { year: "2031", value: 85000 },
    { year: "2032", value: 110000 },
    { year: "2033", value: 140000 },
    { year: "2034", value: 175000 },
  ];

  // Capital structure data
  const capitalData = [
    { name: "Equity", value: 15, color: "#B0AFAF" },
    { name: "Loan A", value: 30, color: "#8B6914" },
    { name: "Loan B", value: 30, color: "#A97C2F" },
    { name: "Down Payment", value: 25, color: "#D4A574" },
  ];

  const COLORS = ["#B0AFAF", "#8B6914", "#A97C2F", "#D4A574"];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/applications");
  };

  const handledashboard = () => {
    navigate("/dashboard");
  };

  const handleSupport = () => {
    navigate("/support");
  };

  return (
    <div
      className="min-h-screen bg-[url('https://c.animaapp.com/meu8kae0jVrFXq/img/bg.png')] bg-cover bg-center bg-no-repeat text-white font-montserrat"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="border-b border-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://c.animaapp.com/meur8v47FVLTqq/img/67709f63669fc8c6f01fff47-group-25-1.png"
                  alt="Munoz Ghezlan Capital"
                  className="h-8 w-auto"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex ml-10 items-baseline space-x-8">
                <button className="text-white px-3 py-2 text-sm font-medium transition-colors"
                onClick={handledashboard}>
                  
                  Dashboard
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Applications
                </button>
                <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium border-b-2 border-yellow-600">
                  Loan Calculator
                </button>
                <button
                  onClick={handleSupport}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Tranchi
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden ml-4 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <div className="w-8 h-8 bg-[#BF9A68] rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-semibold text-black">MV</span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-700 pt-4 pb-2">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white px-3 py-2 text-sm font-medium text-left border-l-2 border-yellow-600"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    handleNext();
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium text-left transition-colors"
                >
                  Applications
                </button>
                <button
                  onClick={() => {
                    handleSupport();
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium text-left transition-colors"
                >
                  Tranchi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4 text-white ">
            Discover your{" "}
            <span className="text-[#D4A574] font-bold">
              Deal's Earning Potential
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-5xl mx-auto font-montserrat">
            Crunch and analyze deals with everything you'll need to be
            successful on your real estate investment journey!
          </p>

          {/* Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
            <div>
              <label className="block text-white text-lg mb-4 font-montserrat">
                Purchase Price
              </label>
              <div className="bg-[#45454580] rounded-xl px-6 py-4 border border-gray-600">
                <input
                  type="text"
                  placeholder="eg. $29.99"
                  value={`${purchasePrice.toLocaleString()}`}
                  onChange={(e) =>
                    setPurchasePrice(
                      Number(e.target.value.replace(/[$,]/g, ""))
                    )
                  }
                  className="bg-transparent text-gray-400 outline-none w-full text-base placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-lg mb-4 font-montserrat">
                Downpayment
              </label>
              <div className="bg-[#45454580] rounded-xl px-6 py-4 border border-gray-600 flex items-center">
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${
                      ((downPayment - 10) / 40) * 100
                    }%, #4B5563 ${
                      ((downPayment - 10) / 40) * 100
                    }%, #4B5563 100%)`,
                  }}
                />
                <span className="ml-4 text-white text-lg font-medium w-16 text-right">
                  {downPayment}%
                </span>
              </div>
            </div>
          </div>

          {/* Earnings Projection */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-8 text-white text-center font-montserrat">
              You could be <span className="font-bold">Earning</span>{" "}
              <span className="text-[#D4A574] font-bold">$1,564,411</span> per
              year with your deal.
            </h2>

            <div className="bg-[#45454580] rounded-2xl p-8 max-w-7xl mx-auto relative">
              {/* Y-axis labels */}
              <div className="absolute left-4 top-8 bottom-16 flex flex-col justify-between text-gray-400 text-sm font-montserrat">
                <span>$2.5m</span>
                <span>$2m</span>
                <span>$1.5m</span>
                <span>$1m</span>
                <span>$5k</span>
                <span>$0</span>
              </div>

              {/* Grid lines */}
              <div className="absolute left-16 right-8 top-8 bottom-16">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute w-full border-t border-dashed border-gray-600"
                    style={{ top: `${i * 20}%` }}
                  ></div>
                ))}
              </div>

              <div className="ml-16 mr-8 mb-6 relative">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    data={[
                      { month: "JAN", value: 0 },
                      { month: "FEB", value: 0 },
                      { month: "MAR", value: 43 },
                      { month: "APR", value: 45 },
                      { month: "MAY", value: 332 },
                      { month: "JUN", value: 204 },
                      { month: "JUL", value: 18 },
                      { month: "AUG", value: 0 },
                      { month: "SEP", value: 0 },
                      { month: "OCT", value: 0 },
                      { month: "NOV", value: 0 },
                      { month: "DEC", value: 0 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: -10 }}
                  >
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 15 }}
                      interval={0}
                    />
                    <YAxis hide />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#D4A574"
                      strokeWidth={4}
                      dot={{ fill: "#D4A574", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, fill: "#D4A574" }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                {/* Peak value callout */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#D4A574] text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg font-montserrat">
                    $1,565,411
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-[#D4A574]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deal Type Selector */}
          <div className="mb-12 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-white font-montserrat">
              Select your Deal Type
            </h3>
            <div className="flex w-full justify-center gap-6">
              <button className="w-1/3 bg-transparent border border-gray-600 rounded-xl py-6 px-8 text-white font-medium text-lg hover:bg-gray-700 transition-colors font-montserrat">
                Buy & Hold
              </button>
              <button
                className="w-1/3 rounded-xl font-montserrat py-6 px-8 text-white font-bold text-lg shadow-none"
                style={{
                  background: "linear-gradient(to right, #d4a26c, #cb9e52)",
                }}
              >
                Fix & Flip
              </button>
              <button className="w-1/3 bg-transparent border border-gray-600 rounded-xl py-6 px-8 text-white font-medium text-lg hover:bg-gray-700 transition-colors font-montserrat">
                BRRR
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
          {/* Capital Structure */}
          <div className=" flex flex-col">
            <h3 className="text-4xl font-bold mb-8 text-white font-montserrat">
              <span className="font-light">Capital</span> Structure
            </h3>
            <div className="flex items-center justify-center relative   bg-[#45454580] rounded-xl  pt-20 pb-20">
              <ResponsiveContainer width={280} height={280}>
                <PieChart>
                  <Pie
                    data={capitalData}
                    cx={140}
                    cy={140}
                    innerRadius={95}
                    outerRadius={130}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                    paddingAngle={4}
                  >
                    {capitalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white">
                  ${purchasePrice.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400 mt-1">Loan Amount</div>
              </div>
            </div>
            {/* Move legend outside and below the chart */}
            <div className="flex flex-wrap justify-between pt-10 mt-3  bg-[#45454580] rounded-xl p-8 ">
              {capitalData.map((entry, idx) => (
                <div key={entry.name} className="flex items-center mb-2 mx-2">
                  <div
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-lg font-medium text-white">
                    {entry.value}%
                  </span>
                  <span className="ml-2 text-gray-400 text-sm">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Analysis */}
          <div className=" flex flex-col">
            <h3 className="text-4xl font-bold mb-8 text-white font-montserrat">
              <span className="font-light">Property</span> Analysis
            </h3>

            <div className="space-y-3 bg-[#45454580] rounded-xl p-8 border border-gray-800">
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl ">Purchase Price</span>
                <span className="text-white text-xl ">
                  ${purchasePrice.toLocaleString()}
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  # of Units
                </span>
                <span className="text-white text-xl font-montserrat">1</span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  Monthly Income
                </span>
                <span className="text-white text-xl font-montserrat">
                  $1,600
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserratl">
                  Debt Service
                </span>
                <span className="text-white text-xl font-montserrat">
                  -$463.32
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  Earnings
                </span>
                <span className="text-white text-xl font-montserrat">
                  $410.67
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  Insurance
                </span>
                <span className="text-white text-xl font-montserrat">
                  1% of Purchase Price
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  Taxes
                </span>
                <span className="text-white text-xl font-montserrat">
                  2% of Purchase Price
                </span>
              </div>
              <hr className="border-t border-gray-700 my-1" />
              <div className="flex justify-between items-center py-2">
                <span className="text-white text-xl font-montserrat">
                  Property Manager
                </span>
                <span className="text-white text-xl font-montserrat">
                  10% of Monthly Rent Price
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto font-montserrat">
          <div className="bg-[#45454580] rounded-xl p-8 text-center border border-gray-800">
            <div className="text-4xl font-bold mb-3 text-white">8.6%</div>
            <div className="text-[#dfc18f] text-lg">Cash-on-Cash Returns</div>
          </div>
          <div className="bg-[#45454580] rounded-xl p-8 text-center border border-gray-800">
            <div className="text-4xl font-bold mb-3 text-white">$211</div>
            <div className="text-[#dfc18f] text-lg">Monthly Cashflow</div>
          </div>
          <div className="bg-[#45454580] rounded-xl p-8 text-center border border-gray-800">
            <div className="text-4xl font-bold mb-3 text-white">$21,000</div>
            <div className="text-[#dfc18f] text-lg">Down payment</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 font-montserrat">
          <button
            className=" text-white px-8 py-4 rounded-lg font-bold text-base hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(to right, #d4a26c, #cb9e52)",
            }}
          >
            GET INTERESTED CAPITAL
          </button>
          <button
            className="  text-white px-8 py-4 rounded-lg font-bold text-base hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg "
            style={{
              background: "linear-gradient(to right, #d4a26c, #cb9e52)",
            }}
          >
            GET A PROPOSAL
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs">
          © 2024 Mevas Gildan Capital. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #d4a574;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #d4a574;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default RealEstateDashboard;
