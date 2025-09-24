import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  Menu,
  X,
  Send,
  User,
  MessageSquare,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SupportPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Munoz Ghezlan Capital Support. How can I help you today?",
      sender: "support",
      timestamp: "10:30 AM",
      senderType: "Admin",
    },
    {
      id: 2,
      text: "Hi, I have a question about my loan application status.",
      sender: "user",
      timestamp: "10:32 AM",
      senderType: "User",
    },
    {
      id: 3,
      text: "I'd be happy to help you with that. Can you please provide your application reference number?",
      sender: "support",
      timestamp: "10:33 AM",
      senderType: "Admin",
    },
  ]);
  const [sending, setSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef(null);

  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleApplications = () => {
    navigate("/applications");
  };

  const handleCalculator = () => {
    navigate("/calculator");
  };

  const sendMessage = async () => {
    if (!message.trim() || sending) return;

    try {
      setSending(true);
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        senderType: "User",
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate typing indicator
      setIsTyping(true);

      // Simulate support response after 2 seconds
      setTimeout(() => {
        setIsTyping(false);
        const supportResponse = {
          id: messages.length + 2,
          text: "Thank you for your message. Our support team will get back to you shortly with assistance.",
          sender: "support",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          senderType: "Admin",
        };
        setMessages((prev) => [...prev, supportResponse]);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refreshChat = () => {
    console.log("Refreshing chat...");
    // Add refresh logic here if needed
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
                <button
                  className="text-white px-3 py-2 text-sm font-medium transition-colors"
                  onClick={handleDashboard}
                >
                  Dashboard
                </button>
                <button
                  onClick={handleApplications}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Applications
                </button>
                <button
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors "
                  onClick={handleCalculator}
                >
                  Loan Calculator
                </button>
                <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium border-b-2 border-yellow-600">
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
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Tranchi
              </h1>
              <p className="text-gray-300 text-sm mt-2">
                Get help with your applications and account
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-[#45454580] backdrop-blur-sm rounded-lg overflow-hidden h-[500px] sm:h-[600px] flex flex-col border border-gray-600">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#8E653A] to-[#BF9A68] px-4 sm:px-6 py-4 border-b border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-[#8E653A]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Tranchi</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/20">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-500" />
                <p>No messages yet. Start the conversation!</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.senderType === "User" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                      msg.senderType === "User"
                        ? "bg-gradient-to-r from-[#8E653A] to-[#BF9A68] text-white"
                        : "bg-gray-700/80 text-white border border-gray-600"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <div
                      className={`text-xs mt-1 ${
                        msg.senderType === "User"
                          ? "text-gray-200"
                          : "text-gray-400"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700/80 text-white px-4 py-2 rounded-lg border border-gray-600">
                  <div className="text-sm text-gray-300 italic">
                    Support team is typing...
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-600 p-4 bg-gray-800/30">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700/60 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                disabled={sending}
              />
              <button
                onClick={sendMessage}
                disabled={!message.trim() || sending}
                className="bg-gradient-to-r from-[#8E653A] to-[#BF9A68] hover:opacity-90 px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {sending ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
                <span className="text-white text-sm font-medium">Send</span>
              </button>
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

export default SupportPage;
