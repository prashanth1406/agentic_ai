import React, { useState } from "react";

function ForgotPassword({ handleBack }) {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSendEmail = () => {
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFeedback("Please enter a valid email address.");
      setTimeout(() => setFeedback(""), 5000);
      return;
    }

    // Simulate sending an email and provide feedback
    setFeedback("Email sent successfully! Check your inbox for the reset link.");
    setTimeout(() => setFeedback(""), 5000); // Clear feedback after 5 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">          
          Reset Your Password
        </h1>
        <p className="mb-4">
          Please enter your email address to receive a password reset link.
        </p>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="flex justify-between">
          <button 
            className="w-1/2 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
            onClick={handleBack}
          >
            Cancel
          </button>
          <button 
            className="w-1/2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleSendEmail}
          >
            Send Email
          </button>
        </div>
        {feedback && (
          <div className="mt-4 text-center text-green-600">{feedback}</div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
