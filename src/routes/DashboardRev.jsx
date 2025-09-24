import React, { useState } from 'react';
import TimelineImg from '../asstes/Timeline.png';
import { Search, Bell, FileText, CheckCircle, DollarSign, Clock, User, Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Timeline } from '../component/Timeline';

const DashboardRev = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate("/applications");
  };
   const handleCalculator = () => {
    navigate("/calculator");
  };

  const handleSupport = () => {
    navigate("/support");
  };
  
  return (
    <div className="min-h-screen bg-[url('https://c.animaapp.com/meu8kae0jVrFXq/img/bg.png')] bg-cover bg-no-repeat bg-center text-white">
      
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
                     <button className="text-white px-3 py-2 text-sm font-medium transition-colors border-yellow-600 border-b-2"
                     >
                       
                       Dashboard
                     </button>
                     <button
                       onClick={handleNext}
                       className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                     >
                       Applications
                     </button>
                     <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                     onClick={handleCalculator}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Message */}
        <h1 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 mt-6 sm:mt-8">
          Good Morning, <span className="font-bold">Margarita</span>
        </h1>

        
        < Timeline />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center sm:mb-4">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-0 sm:mr-3" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-3xl font-bold">07</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Total Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-0 sm:mr-3" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-3xl font-bold">02</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Approved Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center sm:mb-4">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-0 sm:mr-3" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-3xl font-bold">01</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Funded Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center sm:mb-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-0 sm:mr-3" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-3xl font-bold">06</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Pending Applications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Amount Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFDEA4] mr-3" />
              <div>
                <div className="text-xl sm:text-2xl font-bold">$35,000</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Approved Loan Amount</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700">
            <div className="flex items-center mb-2">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFDEA4] mr-3" />
              <div>
                <div className="text-xl sm:text-2xl font-bold">$15,000</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Funded Loan Amount</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFDEA4] mr-3" />
              <div>
                <div className="text-xl sm:text-2xl font-bold">$25,000</div>
                <div className="text-xs sm:text-sm text-[#FFDEA4]">Pending Loan Amount</div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Applications Button */}
        <div className="text-center mb-8">
          <button 
            onClick={handleNext}
            className="w-full sm:w-auto bg-gradient-to-r from-[#8E653A] to-[#BF9A68] hover:opacity-90 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
          >
            VIEW ALL APPLICATIONS
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm pb-4">
          © 2024 Munoz Chelan Capital, All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export { DashboardRev };