import React, { useState } from "react";
import { Search, ChevronDown, Bell, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoanApplicationsDashboard = () => {
  const [sortBy, setSortBy] = useState("Date");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/dashboard");
  };

  const handleSupport = () => {
    navigate("/support");
  };

  const handleCalculator = () => {
    navigate("/calculator");
  };

  const applications = [
    {
      id: 1,
      lenderName: "LIGHTSTREAM Auto to Cash",
      status: "Pending",
      amount: "$35,000",
      submittedDate: "08/14/2025",
      approvedDate: "-",
      fundedDate: "-",
    },
    {
      id: 2,
      lenderName: "Jenius Bank",
      status: "Pending",
      amount: "$35,000",
      submittedDate: "08/14/2025",
      approvedDate: "-",
      fundedDate: "-",
    },
    {
      id: 3,
      lenderName: "Sofi",
      status: "Paused",
      amount: "$35,000",
      submittedDate: "08/14/2025",
      approvedDate: "-",
      fundedDate: "-",
    },
    {
      id: 4,
      lenderName: "TD BANK LOAN",
      status: "Pending",
      amount: "$35,000",
      submittedDate: "08/14/2025",
      approvedDate: "-",
      fundedDate: "-",
    },
    {
      id: 5,
      lenderName: "Prosper",
      status: "Pending",
      amount: "$35,000",
      submittedDate: "08/14/2025",
      approvedDate: "-",
      fundedDate: "-",
    },
    {
      id: 6,
      lenderName: "Sofi",
      status: "Funded",
      amount: "$35,000",
      submittedDate: "08/15/2025",
      approvedDate: "08/19/2025",
      fundedDate: "08/19/2025",
    },
    {
      id: 7,
      lenderName: "Sofi",
      status: "Approved",
      amount: "$35,000",
      submittedDate: "08/18/2025",
      approvedDate: "08/20/2025",
      fundedDate: "-",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-400";
      case "Approved":
        return "text-green-400";
      case "Funded":
        return "text-blue-400";
      case "Paused":
        return "text-gray-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="bg-[url('https://c.animaapp.com/meu8kae0jVrFXq/img/bg.png')] bg-cover bg-center bg-no-repeat text-white w-full min-h-screen">
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
                <button
                  className="text-white px-3 py-2 text-sm font-medium transition-colors"
                  onClick={handleNext}
                >
                  Dashboard
                </button>
                <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium border-b-2 border-yellow-600">
                  Applications
                </button>
                <button
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium  transition-colors"
                  onClick={handleCalculator}
                >
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Page Title and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            My Applications
          </h1>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#45454580] backdrop-blur-sm text-white px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-yellow-600 appearance-none pr-8 text-sm"
              >
                <option>Date</option>
                <option>Amount</option>
                <option>Status</option>
                <option>Lender</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Applications Table Container with Horizontal Scroll */}
        <div className="bg-[#45454580] backdrop-blur-sm rounded-lg overflow-hidden">
          {/* Horizontal Scrollable Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {" "}
              {/* Minimum width to prevent cramping */}
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#8E653A] to-[#BF9A68] px-6 py-4">
                <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-white">
                  <div>LENDER NAME</div>
                  <div>STATUS</div>
                  <div>AMOUNT</div>
                  <div>SUBMITTED DATE</div>
                  <div>APPROVED DATE</div>
                  <div>FUNDED DATE</div>
                </div>
              </div>
              {/* Table Body */}
              <div className="divide-y divide-gray-700">
                {applications.map((app, index) => (
                  <div
                    key={app.id}
                    className="px-6 py-4 hover:bg-gray-700/50 transition-colors bg-gray-800/30"
                  >
                    <div className="grid grid-cols-6 gap-4 text-sm">
                      <div className="text-white font-medium">
                        {app.lenderName}
                      </div>
                      <div
                        className={`font-medium ${getStatusColor(app.status)}`}
                      >
                        {app.status}
                      </div>
                      <div className="text-white">{app.amount}</div>
                      <div className="text-gray-300">{app.submittedDate}</div>
                      <div className="text-gray-300">{app.approvedDate}</div>
                      <div className="text-gray-300">{app.fundedDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 Munoz Ghezlan Capital. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationsDashboard;
