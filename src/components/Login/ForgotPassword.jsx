import React, { useState } from "react";

function ForgotPassword({ handleBack }) {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    // Logic to send reset link email will be implemented here
    console.log('Send reset link to:', email);
    // For now, we just log it to the console
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
          <button onClick={handleBack} className="w-1/2 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300">
            Cancel
          </button>
          <button onClick={handleSendEmail} className="w-1/2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Send Email
          </button>
        </div>
        <a
          href="#"
          onClick={handleBack}
          className="mt-2 text-sm text-blue-600 hover:underline"
        >
          Back to login
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;
