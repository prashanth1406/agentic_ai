import React from 'react';

function ForgotPassword({ handleBack }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Reset Your Password</h1>
        <p className="mb-4">Please enter your email address to receive a password reset link.</p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Send Reset Link</button>
        <a href="#" onClick={handleBack} className="mt-2 text-sm text-blue-600 hover:underline">Back to login</a>
      </div>
    </div>
  );
}

export default ForgotPassword;